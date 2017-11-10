var sharedValue = require('../shared/sharedstuff').shared;
var appInsights = require("applicationinsights");


module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.log.metric("hello", 1);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Hello from ExtraLogging. Shared value:  " + sharedValue
    };

    context.done();
};