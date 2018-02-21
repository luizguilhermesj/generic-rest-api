module.exports = function (req, res, next) {
    let where = req.query.where ? JSON.parse(req.query.where) : req.query

    let options = {
        where
    }

    if (req.query.populate) {
        options.include = req.query.populate.split(',');
        delete options.where.populate;
    }

    if (req.query.fields) {
        options.attributes = req.query.fields.split(',');
        delete options.where.fields;
    }

    req.queryOptions = options;
    next();
}
