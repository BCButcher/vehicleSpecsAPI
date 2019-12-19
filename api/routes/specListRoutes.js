'use strict';
module.exports = function(app) {
    var vehicleList = require('../controllers/specListController');

    // specList Routes
    app.route('/specs')
        .get(vehicleList.list_all_specs)
        .post(vehicleList.create_a_spec);


    app.route('/specs/:specId')
        .get(vehicleList.read_a_spec)
        .put(vehicleList.update_a_spec)
        .delete(vehicleList.delete_a_spec);
};