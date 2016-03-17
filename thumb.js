var thumbs = require('thumbs');
//1234
var thumbnails = thumbs({
    small: {
        height: 256 * 2,
        quality: 25
    },
    large: {
        max: 1024 * 2,
        quality: 50
    },
    huge: {
        max: 1024 * 8,
        quality: 50
    }
});

console.log("start");

thumbnails.write({
    src: 'flower.jpg',
    dest: 'thumb_flower.jpg'
});

thumbnails.on('data', function(obj) {
    console.log('thumbnailed:', obj);
});
