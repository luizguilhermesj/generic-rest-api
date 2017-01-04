var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    req.genericRestApi.model
    .findAll()
    .then(function(records) {
      res.json(records);
    })
    .catch(function(err){
      res.json({error: err});
    });
});

router.post('/', function(req, res, next) {
    req.genericRestApi.model
    .create(req.body)
    .then(function(record) {
        if (record) return res.json(record);
    })
    .catch(function(err){
      res.json({error: err});
    });
});

router.get('/:id', function(req, res, next) {
    req.genericRestApi.model
    .findById(req.params.id)
    .then(function(record) {
      res.json(record);
    })
    .catch(function(err){
      res.json({error: err});
    });
});

router.put('/:id', function(req, res, next) {
    req.genericRestApi.model
    .findById(req.params.id)
    .then(function(record) {
      Object.assign(record, req.body);
      record.save();
      res.json(record);
    })
    .catch(function(err){
      res.json({error: err});
    });
});

router.delete('/:id', function(req, res, next) {
    req.genericRestApi.model
    .findById(req.params.id)
    .then(function(record) {
        record.destroy();
        res.json({message: req.params.model+" destroyed"});
    })
    .catch(function(err){
      res.json({error: err});
    });
});

module.exports = router;
