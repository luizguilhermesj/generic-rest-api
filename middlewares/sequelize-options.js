const reservedVars = ['populate', 'fields'];

const middleware = (req, res, next) => {
    try {
        req.queryOptions = {
            where: req.query.where ? JSON.parse(req.query.where) : removeReservedVars(req.query),
            include: getFieldAsArray(req.query.populate),
            attributes: getFieldAsArray(req.query.fields),
        };
    } catch(err) {
        return res.status(500).json({ error: 'Route malformed' });
    }

    next();
}

const removeReservedVars = queries =>
    Object.keys(queries)
        .filter(obj => reservedVars.indexOf(obj) === -1)
        .reduce((obj, key) => {
            obj[key] = queries[key];
            return obj;
        }, {});

const getFieldAsArray = field =>
    field ? field.split(',') : undefined;

module.exports = {
    middleware,
    removeReservedVars,
    getFieldAsArray,
};
