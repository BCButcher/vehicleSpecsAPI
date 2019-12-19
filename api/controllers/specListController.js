'use strict';


var mongoose = require('mongoose'),
    Spec = mongoose.model('Specs');

exports.list_all_specs = function(req, res) {
    Spec.find({}, function(err, spec) {
        if (err)
            res.send(err);
        res.json(spec);
    });
};

exports.create_a_spec = function(req, res) {
    var new_spec = new Spec(req.body);
    new_spec.save(function(err, spec) {
        if (err)
            res.send(err);
        res.json(spec);
    });
};

exports.read_a_spec = function(req, res) {
    Spec.findById(req.params.specId, function(err, spec) {
        if (err)
            res.send(err);
        res.json(spec);
    });
};

exports.update_a_spec = function(req, res) {
    Spec.findOneAndUpdate({ _id: req.params.specId }, req.body, { new: true }, function(err, spec) {
        if (err)
            res.send(err);
        res.json(spec);
    });
};

exports.delete_a_spec = function(req, res) {
    Spec.remove({
        _id: req.params.specId
    }, function(err, spec) {
        if (err)
            res.send(err);
        res.json({ message: 'Spec successfully deleted' });
    });
};