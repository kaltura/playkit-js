import chai from 'chai';

global.chai = chai;
global.chai.should();

var context = require.context('./test', true, /\.spec\.js$/);
context.keys().forEach(context);
