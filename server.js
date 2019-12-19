var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Spec = require('./api/models/specListModels'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vehicleSpecs'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/specListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('spec list RESTful API server started on: ' + port);