var fs = require('fs');
var express = require('express');
var router = express.Router();
var routes = require('./express-routes');

module.exports = function(modelsPath, options) {
    if (typeof modelsPath == 'undefined') throw Error('You must pass the models path as the second argument');

    var models  = require(modelsPath);
    var defaults = {
        middlewares: []
    };

    options = Object.assign(defaults, options);

    var preRoutes = require('./express-pre-routes')(options.middlewares);

    fs.readdirSync(modelsPath).forEach(function (file) {
        if(file.substr(-3) == '.js') {
            var modelName = file.replace(".js","");
            var route = '/' + modelName;
            router.use(route, preRoutes, function(req, res, next) {
                req.genericRestApi = {
                    modelName: modelName,
                    models: models,
                    model: models[modelName]
                };
                return routes(req, res, next);
            });
        }
    });

    return router;
};


