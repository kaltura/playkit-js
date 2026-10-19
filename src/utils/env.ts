import UAParser from 'ua-parser-js';
import { IEnv } from '../types/ua-parser';

const SmartTvRegex = /^.*(smart-tv|smarttv).*$/i;

const LGTVRegex = /^.*(web0s).*(smarttv).*$/i;

const SAMSUNGTVRegex = /^.*(smart-tv).*(tizen).*$/i;

const HISENSETVRegex = /^.*(vidaa).*(smarttv).*$/i;

//recognize as safari
const SAMSUNGBrowserParser = [
  [SAMSUNGTVRegex],
  [
    [UAParser.BROWSER.NAME, 'SAMSUNG_TV_BROWSER'],
    [UAParser.BROWSER.MAJOR, ''],
    [UAParser.BROWSER.VERSION, '']
  ]
];

//recognize "iOS/<version>" of custom in-app user agents, e.g. "App/1.0 (iOS/17.0; iPhone)"
const IOSAppRegex = /\b(ios)\/([\w.]+)/i;

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

const BrowserParser = [...EdgeChromiumParser, ...SAMSUNGBrowserParser];

const Env: IEnv = new UAParser(undefined, { browser: BrowserParser, device: DeviceParser, os: OSParser }).getResult() as IEnv;

// Custom in-app user agents carry no browser token, so the parser leaves browser.name empty.
// On mobile, infer it from the OS using the same names the parser gives standard webview user agents.
if (!Env.browser.name && Env.device.type === UAParser.DEVICE.MOBILE) {
  if (Env.os.name === 'iOS') {
    Env.browser.name = 'WebKit';
  } else if (Env.os.name === 'Android') {
    Env.browser.name = 'Chrome WebView';
  }
}

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
