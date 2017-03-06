import chai from 'chai';
// import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import sinon from 'sinon/pkg/sinon';

export function prepareTestEnvironment() {
  // mocha.setup('bdd');
  // chai.use(chaiAsPromised);
  chai.should();
  chai.use(sinonChai);
  global.chai = chai;
  global.expect = chai.expect;
  global.should = chai.should;
  global.sinon = sinon;
}

export default prepareTestEnvironment;
