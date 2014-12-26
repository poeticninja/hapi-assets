var _ = require('lodash');

exports.register = function (server, options, next) {

    var environment = process.env.NODE_ENV || 'development';

    // Hook onto the 'onPostHandler'
    server.ext('onPostHandler', function (request, reply) {
        // Get the response object
        var response = request.response;

        // Check to see if the response is a view
        if (response.variety === 'view') {

            if(_.isEmpty(response.source.context)){
                response.source.context = {};
            }

            if(_.isEmpty(response.source.context.assets)){
                response.source.context.assets = {};
            }
            response.source.context.assets = options[environment];
        }
        return reply.continue();
    });
    return next();
};

exports.register.attributes = {
    pkg: require("./package.json")
};