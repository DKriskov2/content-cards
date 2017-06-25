var express = require('express');
var request = require('request');
var cors = require('cors')

var app = express();
app.use(cors())

const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/place/'
const GOOGLE_API_KEY = 'AIzaSyBzslEGtQy17iOS7PLYWq-VK4TQjJAvcrI'

app.get('/nearbysearch/:location/:radius', function (req, res) {
  request({
    method: 'GET',
    url: GOOGLE_API_URL + 'nearbysearch/json?key=' + GOOGLE_API_KEY,
    qs: {
      location: req.params.location,
      radius: req.params.radius
    },
  }).pipe(res)
})

app.listen(3333, function () {
  console.log('proxy listening on port 3333!');
})