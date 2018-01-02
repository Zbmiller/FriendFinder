// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// Dependencies
var friends = require('../data/friends.js');
var path = require('path');

// Routes
module.exports = function(app) {

    // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};