var Twitter = require('twitter');
///////////////////////////////
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    request_options: {
        proxy: process.env.ZRQ_PROXY
    }
});


var params = {
    screen_name: 'ricquintas'
};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        for (var i = tweets.length - 1; i >= 0; i--) {
            var obj = tweets[i].entities.media;
            if (obj) {
                console.log(obj[0].media_url);
            }
        }
    } else {
        console.log(error);
    }
});
