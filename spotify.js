

var song = process.argv[2]

                 var spotify = require('spotify');
 
spotify.search({ type: 'track', query: song }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 for (var i = 0; i < data.tracks.items.length; i++) {
                        console.log("artist: " + data.tracks.items[i].artists[0].name + "\n" +
                                    "song name: " + data.tracks.items[i].name + "\n" +
                                    "preview link: " + data.tracks.items[i].preview_url + "\n" +
                                    "album name: " + data.tracks.items[i].album.name + "\n");
                        }
});