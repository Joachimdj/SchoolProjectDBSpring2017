var express = require('express');
var router = express.Router();

//Given a city name your application returns all book titles with corresponding authors that mention this city.
router.post('/cityName', function(req, res, next) {
    res.send('cityName');
});

//Given a book title, your application plots all cities mentioned in this book onto a map.
router.post('/bookTitle', function (req, res) {
    res.send('BookTitle')
})

//Given an author name your application lists all books written by that author and plots all cities mentioned in any of the books onto a map.
router.post('/authorName', function (req, res) {
    res.send('AuthorName')
})

//Given a geolocation, your application lists all books mentioning a city in vicinity of the given geolocation.
router.post('/geoLocation', function (req, res) {
    res.send('geoLocation')
})

module.exports = router;
