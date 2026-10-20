import UAParser from 'ua-parser-js';
import { IEnv } from '../types/ua-parser';

const SmartTvRegex = /^.*(smart-tv|smarttv).*$/i;

const LGTVRegex = /^.*(web0s).*(smarttv).*$/i;

const SAMSUNGTVRegex = /^.*(smart-tv).*(tizen).*$/i;

const HISENSETVRegex = /^.*(vidaa).*(smarttv).*$/i;

//recognize "iOS/<version>" and "Android/<version>" of custom in-app user agents, e.g. "App/1.0 (Android/16; Pixel)"
const IOSAppRegex = /\b(ios)\/([\w.]+)/i;
const AndroidAppRegex = /\bandroid\/[\w.]+/i;

//recognize as safari
const SAMSUNGBrowserParser = [
  [SAMSUNGTVRegex],
  [
    [UAParser.BROWSER.NAME, 'SAMSUNG_TV_BROWSER'],
    [UAParser.BROWSER.MAJOR, ''],
    [UAParser.BROWSER.VERSION, '']
  ]
];

//recognize os of smartTV devices and custom in-app user agents
const OSParser = [[LGTVRegex], [UAParser.OS.NAME], [HISENSETVRegex], [UAParser.OS.NAME], [IOSAppRegex], [UAParser.OS.NAME, UAParser.OS.VERSION]];

//add smart tv as smart tv devices
const DeviceParser = [
  [LGTVRegex],
  [
    [UAParser.DEVICE.VENDOR, 'LG'],
    [UAParser.DEVICE.TYPE, UAParser.DEVICE.SMARTTV]
  ],
  [SAMSUNGTVRegex],
  [
    [UAParser.DEVICE.VENDOR, 'SAMSUNG'],
    [UAParser.DEVICE.TYPE, UAParser.DEVICE.SMARTTV]
  ],
  [HISENSETVRegex],
  [
    [UAParser.DEVICE.VENDOR, 'HISENSE'],
    [UAParser.DEVICE.TYPE, UAParser.DEVICE.SMARTTV]
  ],
  [SmartTvRegex],
  [[UAParser.DEVICE.TYPE, UAParser.DEVICE.SMARTTV]]
];

const EdgeChromiumParser = [[/(edg)\/((\d+)?[\w.]+)/i], [[UAParser.BROWSER.NAME, 'Edge'], UAParser.BROWSER.VERSION, UAParser.BROWSER.MAJOR]];
const IOSCustomParser = [[IOSAppRegex], [[UAParser.BROWSER.NAME, 'WebKit']]];
const androidCustomParser = [[AndroidAppRegex], [[UAParser.BROWSER.NAME, 'Chrome WebView']]];

const BrowserParser = [...EdgeChromiumParser, ...SAMSUNGBrowserParser, ...IOSCustomParser, ...androidCustomParser];


const Env: IEnv = new UAParser(undefined, { browser: BrowserParser, device: DeviceParser, os: OSParser }).getResult() as IEnv;

Env['isConsole'] = Env.device.type === UAParser.DEVICE.CONSOLE;
Env['isSmartTV'] = Env.device.type === UAParser.DEVICE.SMARTTV;
Env['isMobile'] = Env.device.type === UAParser.DEVICE.MOBILE;
Env['isTablet'] = Env.device.type === UAParser.DEVICE.TABLET;
Env['isWearable'] = Env.device.type === UAParser.DEVICE.WEARABLE;
Env['isEmbedded'] = Env.device.type === UAParser.DEVICE.EMBEDDED;
Env['isIPadOS'] = Env.os.name === 'Mac OS' && 'ontouchend' in document;
Env['isSafari'] = Boolean(Env.browser.name?.includes('Safari'));
Env['isIOS'] = Env.os.name === 'iOS';
Env['isMacOS'] = Env.os.name === 'Mac OS';
Env['isChrome'] = Boolean(Env.browser.name?.includes('Chrome'));
Env['isEdge'] = Boolean(Env.browser.name === 'Edge');
Env['isFirefox'] = Boolean(Env.browser.name?.includes('Firefox'));
export default Env;
