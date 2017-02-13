/*
This node script will download the json file for the Missouri Tile products and
save it into _data folder.
*/

const http = require('http');
const fs = require('fs');
const file = "http://spreadsheets.google.com/feeds/list/11154dJ3uejfY09RQSKT5Y4DaHrlnjWsYAVA2zd8upnY/od6/public/values?alt=json";

var dest = fs.createWriteStream('./_data/products.json');
var request = http.get(file, function (response) {
  response.pipe(dest);
  console.log("Downloaded Products JSON file to '_data'");
});
