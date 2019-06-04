// @flow
import UAParser from 'ua-parser-js';

const LGDeviceRegex = [[/^.*(web0s).*(smarttv).*$/i], [[UAParser.DEVICE.VENDOR, 'LG'], [UAParser.DEVICE.TYPE, UAParser.DEVICE.SMARTTV]]];
const LGOSRegex = [[/^.*(web0s).*(smarttv).*$/i], [UAParser.OS.NAME]];

let Env = new UAParser(undefined, {device: LGDeviceRegex, os: LGOSRegex}).getResult();

Env.isSmartTV = Env.device.type === UAParser.DEVICE.SMARTTV;
Env.isMobile = Env.device.type === UAParser.DEVICE.MOBILE;
Env.isTablet = Env.device.type === UAParser.DEVICE.TABLET;
Env.isWearable = Env.device.type === UAParser.DEVICE.WEARABLE;
Env.isEmbedded = Env.device.type === UAParser.DEVICE.EMBEDDED;

export default Env;
