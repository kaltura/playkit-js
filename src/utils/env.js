// @flow
import UAParser from 'ua-parser-js';
const Env = new UAParser().getResult();
export default Env;
