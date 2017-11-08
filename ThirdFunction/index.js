module.exports = function (context, req) {

    var sharedValue = require('../shared/sharedstuff').shared;
    
    module.exports = function (context, req) {
        context.log('JavaScript HTTP trigger function processed a request.');
    
        context.res = {
            status: 400,
            body: "Hello from SecondFunction. Shared value:  " + sharedValue
        };
    
        context.done();
    };

};