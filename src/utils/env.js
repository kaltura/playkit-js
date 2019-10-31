// @flow
import UAParser from 'ua-parser-js';

const LGTVRegex = /^.*(web0s).*(smarttv).*$/i;
//doesn't recognize lg at all
const LGOSParser = [[LGTVRegex], [UAParser.OS.NAME]];

const SAMSUNGTVRegex = /^.*(smart-tv).*(tizen).*$/i;
//recognize as safari
const SAMSUNGBrowserParser = [
  [SAMSUNGTVRegex],
  [[UAParser.BROWSER.NAME, 'SAMSUNG_TV_BROWSER'], [UAParser.BROWSER.MAJOR, ''], [UAParser.BROWSER.VERSION, '']]
];

//add smart tv as smart tv devices
const DeviceParser = [
  [LGTVRegex],
  [[UAParser.DEVICE.VENDOR, 'LG'], [UAParser.DEVICE.TYPE, UAParser.DEVICE.SMARTTV]],
  [SAMSUNGTVRegex],
  [[UAParser.DEVICE.TYPE, UAParser.DEVICE.SMARTTV]]
];

const EdgeChromiumParser = [[/(edg)\/((\d+)?[\w.]+)/i], [[UAParser.BROWSER.NAME, 'Edge'], UAParser.BROWSER.VERSION, UAParser.BROWSER.MAJOR]];

const BrowserParser = [...EdgeChromiumParser, ...SAMSUNGBrowserParser];

let Env = new UAParser(undefined, {browser: BrowserParser, device: DeviceParser, os: LGOSParser}).getResult();

Env.isConsole = Env.device.type === UAParser.DEVICE.CONSOLE;
Env.isSmartTV = Env.device.type === UAParser.DEVICE.SMARTTV;
Env.isMobile = Env.device.type === UAParser.DEVICE.MOBILE;
Env.isTablet = Env.device.type === UAParser.DEVICE.TABLET;
Env.isWearable = Env.device.type === UAParser.DEVICE.WEARABLE;
Env.isEmbedded = Env.device.type === UAParser.DEVICE.EMBEDDED;
Env.isIPadOS = Env.os.name === 'Mac OS' && 'ontouchend' in document;

export default Env;
