This is small app that uses google places public api to find nearby places.

On `/places` page you will be asked to allow access to your geolocation. If denied default location will be used

Favorite places can be selected and viewed on `/favorites` page


## Getting started

Clone repo `git clone git@github.com:DKriskov2/content-cards.git`

Install dependencies `npm install`

Run `npm start`

In development run `npm run watch-css` for watching and precompiling scss files.

Run the tests `npm run test`


## Tehnical details

To access google places due to cors protection proxy had to be used. `npm start` command runs express server on port 3333, and makes a request for nearby places from google places api.

Test file covers only reducer functions.