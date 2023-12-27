import { should, use } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon/pkg/sinon-esm';
import * as chaiAsPromised from 'chai-as-promised';

should();
use(sinonChai);
use(chaiAsPromised);
global.sinon = sinon;

const testsContext = require.context('./e2e', true);
testsContext.keys().forEach(testsContext);
