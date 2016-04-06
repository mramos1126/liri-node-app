var movie = process.argv[2]


var request = require('request');
request('http://www.omdbapi.com/?t='+ movie +'&y=&plot=short&r=json', function (error, response, body) {
 if (!error && response.statusCode == 200) {
   var json = JSON.parse(body);
   console.log(json.Title + json.Year + "imbd rating: "+json.imdbRating + " Country: " + json.Country + json.Plot+ json.Actors+ json.Metacore) 
 }
})