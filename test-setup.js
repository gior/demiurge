// const jsdom = require('jsdom').jsdom;
//
// global.document = jsdom('');
// global.window = document.defaultView;
// window.console = global.console;
//
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     global[property] = document.defaultView[property];
//   }
// });
//
// global.navigator = {
//   userAgent: 'node.js'
// };

// setup JSDOM
require('jsdom-global')()

// make expect available globally
global.expect = require('expect')