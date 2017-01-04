var fs = require('fs');
var routes = require('./express-routes');

module.exports = function(app, modelsPath, options) {
    if (typeof app == 'undefined') throw Error('You must pass an app object as the first argument');
    if (typeof modelsPath == 'undefined') throw Error('You must pass the models path as the second argument');

    var models  = require(modelsPath);
    var defaults = {
        prefix: null
    };

    options = Object.assign(defaults, options);

    var modelsNames = [];
    fs.readdirSync(modelsPath).forEach(function (file) {
        if(file.substr(-3) == '.js') {
            modelsNames.push(file.replace(".js",""));
        }
    });

    var route = options.prefix ? '/'+options.prefix+'/:model' : '/:model';
    app.use(route, function(req, res, next) {
        if (modelsNames.indexOf(req.params.model) > -1) {
            req.genericRestApi = {
              model: models[req.params.model]
            };
            return routes(req, res, next);
        }

        return next();
    });

};


