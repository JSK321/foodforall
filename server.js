var express = require('express');
// require("dotenv").config()

// Sets up the Express App
// ================================================
var app = express();
var PORT = process.env.PORT || 8080;
// var cors = require('cors')
var allRoutes = require('./controllers');

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Production CORS
// app.use(cors({
//     origin:["https://haruharurecipe.herokuapp.com"]
// }))

// DEV CORS
// app.use(cors())

app.use('/', allRoutes);

db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});