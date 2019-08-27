// @flow
import UAParser from 'ua-parser-js';

const LGTVRegex = /^.*(web0s).*(smarttv).*$/i;
const LGDeviceParser = [[LGTVRegex], [[UAParser.DEVICE.VENDOR, 'LG'], [UAParser.DEVICE.TYPE, UAParser.DEVICE.SMARTTV]]];
const LGOSParser = [[LGTVRegex], [UAParser.OS.NAME]];

const SAMSUNGTVRegex = /^.*(smart-tv).*(tizen).*$/i;
const SAMSUNGBrowserParser = [
  [SAMSUNGTVRegex],
  [[UAParser.BROWSER.NAME, 'SAMSUNG_TV_BROWSER'], [UAParser.BROWSER.MAJOR, ''], [UAParser.BROWSER.VERSION, '']]
];

let Env = new UAParser(undefined, {browser: SAMSUNGBrowserParser, device: LGDeviceParser, os: LGOSParser}).getResult();

Env.isConsole = Env.device.type === UAParser.DEVICE.CONSOLE;
Env.isSmartTV = Env.device.type === UAParser.DEVICE.SMARTTV;
Env.isMobile = Env.device.type === UAParser.DEVICE.MOBILE;
Env.isTablet = Env.device.type === UAParser.DEVICE.TABLET;
Env.isWearable = Env.device.type === UAParser.DEVICE.WEARABLE;
Env.isEmbedded = Env.device.type === UAParser.DEVICE.EMBEDDED;

export default Env;
