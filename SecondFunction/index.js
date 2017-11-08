var sharedValue = require('../shared/sharedstuff').shared;

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Hello from SecondFunction. Shared value:  " + sharedValue
    };

    context.done();
};