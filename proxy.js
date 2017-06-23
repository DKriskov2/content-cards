var express = require('express');
var request = require('request');
var cors = require('cors')

var app = express();
app.use(cors())

app.get('/nearbysearch/:location/:radius', function (req, res) {
  request({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBzslEGtQy17iOS7PLYWq-VK4TQjJAvcrI',
    qs: {
      location: req.params.location,
      radius: req.params.radius
    },
  }).pipe(res)
})

app.listen(8000, function () {
  console.log('proxy listening on port 8000!');
})