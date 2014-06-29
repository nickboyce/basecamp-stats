var config = {};
if (!process.env.NODE_ENV === "production") {
  config = require('./config');
} else {
  config.auth = { "user" : process.env.BCX_USERNAME, "pass" : process.env.BCX_USERNAME };
}
var http = require('http');
var request = require('request');
var express = require("express");
var app = express();

// static files
app.use(express.static(__dirname + '/public'));

// proxy the API requests
app.get('/proxy*', function(req, res) {
  // strange way to get to the path!
  var path = req.params["0"];

  var options = {
    url : 'https://basecamp.com/1807888/api/v1' + path,
    auth: config.auth,
    headers: { "User-Agent" : "BCX wall of shame" },
  };
  request(options).pipe(res)
});

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
  console.log(auth);

});
