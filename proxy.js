var express = require('express');
var request = require('request');
var cors = require('cors')

var app = express();
app.use(cors())

const GOOGLE_API_URL = process.env.REACT_APP_GOOGLE_PLACES_API
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_KEY

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

app.listen(8000, function () {
  console.log('proxy listening on port 8000!');
})