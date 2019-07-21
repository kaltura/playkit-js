// @flow
import UAParser from 'ua-parser-js';

const LGTVRegex = /^.*(web0s).*(smarttv).*$/i;
const LGDeviceParser = [[LGTVRegex], [[UAParser.DEVICE.VENDOR, 'LG'], [UAParser.DEVICE.TYPE, UAParser.DEVICE.SMARTTV]]];
const LGOSParser = [[LGTVRegex], [UAParser.OS.NAME]];

let Env = new UAParser(undefined, {device: LGDeviceParser, os: LGOSParser}).getResult();

Env.isConsole = Env.device.type === UAParser.DEVICE.CONSOLE;
Env.isSmartTV = Env.device.type === UAParser.DEVICE.SMARTTV;
Env.isMobile = Env.device.type === UAParser.DEVICE.MOBILE;
Env.isTablet = Env.device.type === UAParser.DEVICE.TABLET;
Env.isWearable = Env.device.type === UAParser.DEVICE.WEARABLE;
Env.isEmbedded = Env.device.type === UAParser.DEVICE.EMBEDDED;

Env.appProtocol = /^(https?:)/i.test(document.location.protocol) ? document.location.protocol : 'https:';

export default Env;
