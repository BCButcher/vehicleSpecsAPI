'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SpecSchema = new Schema({
    make: {
        type: String,
        required: 'Please enter the vehicle make'
    },
    model: {
        type: String,
        required: 'Please enter the vehicle model'
    },
    year: {
        type: Number,
        required: 'Please enter the vehicle year'
    },
    trim: {
        type: String,
        required: 'Please enter the vehicles trim'
    },
    price_us: {
        type: Number,
        required: 'Please enter the vehicles price in US $'
    },
    transmission: {
        type: String,
        required: 'Please enter the vehicles transmission type'
    },
    drive_type: {
        type: String,
        required: 'Please enter the vehicles drive type (i.e. awd, rwd)'
    },
    engine_type: {
        type: String,
        required: 'Please enter the vehicles engine type'
    },
    engine_size: {
        type: String,
        required: 'Please enter the vehicles engine size'
    },
    cylinders: {
        type: String,
        required: 'Please enter the vehicles number of cylinders'
    },
    power_hp: {
        type: Number,
        required: 'Please enter the vehicles horsepower'
    },
    power_kw: {
        type: Number,
        required: 'Please enter the vehicles kilowatt power'
    },
    hp_rpm: {
        type: Number,
        required: 'Please enter the vehicles peak horsepower rpm'
    },
    torque_lb_ft: {
        type: Number,
        required: 'Please enter the vehicles torque in lb-ft'
    },
    torque_nm: {
        type: Number,
        required: 'Please enter the vehicles torque in nm'
    },
    torque_rpm: {
        type: Number,
        required: 'Please enter the vehicle peak torque rpm'
    },
    zero_to_60_mph: {
        type: Number,
        required: 'Please enter the vehicles 0-60 mph time'
    },
    zero_to_98_kph: {
        type: Number,
        required: 'Please enter the vehicles 0-98 km/h time'
    },
    curb_weight_lbs: {
        type: Number,
        required: 'Please enter the vehicles curb weight in lbs'
    },
    curb_weight_kgs: {
        type: Number,
        required: 'Please enter the vehicles curb weight in kgs'
    },
    fuel_capacity_gal: {
        type: Number,
        required: 'Please enter the vehicles fuel capacity in gal'
    },
    fuel_capacity_L: {
        type: Number,
        required: 'Please enter the vehicles fuel capacity in litres'
    },
    ground_clearance_in: {
        type: Number,
        required: 'Please enter the vehicles ground clearance in inches'
    },
    ground_clearance_mm: {
        type: Number,
        required: 'Please enter the vehicles ground clearance in mm'
    },
    mpg_city: {
        type: Number,
        required: 'Please enter the vehicles city fuel economy in mpg'
    },
    L_per_100km_city: {
        type: Number,
        required: 'Please enter the vehicles city fuel economy in L/100km'
    },
    km_per_L_city: {
        type: Number,
        required: 'Please enter the vehicles city fuel economy in km/L'
    },
    mpg_highway: {
        type: Number,
        required: 'Please enter the vehicles highway fuel economy in mpg'
    },
    L_per_100km_highway: {
        type: Number,
        required: 'Please enter the vehicles highway fuel economy in L/100km'
    },
    km_per_L_highway: {
        type: Number,
        required: 'Please enter the vehicles highway fuel economy in km/L'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Specs', SpecSchema);