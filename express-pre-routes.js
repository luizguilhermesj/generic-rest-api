var express = require('express');
var router = express.Router();

module.exports = function(middlewares) {
    for (var i=0; i < middlewares.length; i++) {
        router.use(middlewares[i]);
    }
    return router;
}
