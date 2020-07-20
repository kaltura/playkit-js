// @flow
import UAParser from 'ua-parser-js';

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

//recognize os of smartTV devices
const OSParser = [[LGTVRegex], [UAParser.OS.NAME], [HISENSETVRegex], [UAParser.OS.NAME]];

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

let Env = new UAParser(undefined, {browser: BrowserParser, device: DeviceParser, os: OSParser}).getResult();

Env.isConsole = Env.device.type === UAParser.DEVICE.CONSOLE;
Env.isSmartTV = Env.device.type === UAParser.DEVICE.SMARTTV;
Env.isMobile = Env.device.type === UAParser.DEVICE.MOBILE;
Env.isTablet = Env.device.type === UAParser.DEVICE.TABLET;
Env.isWearable = Env.device.type === UAParser.DEVICE.WEARABLE;
Env.isEmbedded = Env.device.type === UAParser.DEVICE.EMBEDDED;
Env.isIPadOS = Env.os.name === 'Mac OS' && 'ontouchend' in document;
Env.isSafari = Env.browser.name.includes('Safari');
Env.isIOS = Env.os.name === 'iOS';
Env.isMacOS = Env.os.name === 'Mac OS';

export default Env;
