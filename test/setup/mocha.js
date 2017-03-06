global.chai = require('chai');
global.sinon = require('sinon/pkg/sinon');
global.sinonChai = require('sinon-chai');

global.chai.should();
global.chai.use(global.sinonChai);
