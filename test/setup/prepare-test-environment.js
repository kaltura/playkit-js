import {should, use} from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon/pkg/sinon';
import * as chaiAsPromised from 'chai-as-promised';
/**
 * @returns {void}
 */
export function prepareTestEnvironment() {
  should();
  use(sinonChai);
  use(chaiAsPromised);
  global.sinon = sinon;
}

export default prepareTestEnvironment;
