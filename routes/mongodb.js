var express = require('express');
var router = express.Router();

//Given a city name your application returns all book titles with corresponding authors that mention this city.
router.post('/cityName', function(req, res, next) {
    var para = req.body.cityName;
    if(para != undefined )
    {
        var options = {
            method: 'POST',
            uri: 'http://localhost:3000/mysql/cityName',
            body: {
                cityName:para
            },
            json: true // Automatically stringifies the body to JSON
        };

        rp(options)
            .then(function (parsedBody) {
                // POST succeeded...
                res.send(para);
            })
            .catch(function (err) {
                // POST failed...
                res.send('Error');
            });


    }
    else
    {
        res.send('missing parameter')
    }
});

//Given a book title, your application plots all cities mentioned in this book onto a map.
router.post('/bookTitle', function (req, res) {
    var para = req.body.bookTitle;
    if(para != undefined )
    {
        var options = {
            method: 'POST',
            uri: 'http://localhost:3000/mysql/bookTitle',
            body: {
                bookTitle:para
            },
            json: true // Automatically stringifies the body to JSON
        };

        rp(options)
            .then(function (parsedBody) {
                // POST succeeded...
                res.send(para);
            })
            .catch(function (err) {
                // POST failed...
                res.send('Error');
            });


    }
    else
    {
        res.send('missing parameter')
    }
})

//Given an author name your application lists all books written by that author and plots all cities mentioned in any of the books onto a map.
router.post('/authorName', function (req, res) {
    var para = req.body.authorName;
    if(para != undefined )
    {
        var options = {
            method: 'POST',
            uri: 'http://localhost:3000/mysql/authorName',
            body: {
                authorName:para
            },
            json: true // Automatically stringifies the body to JSON
        };

        rp(options)
            .then(function (parsedBody) {
                // POST succeeded...
                res.send(para);
            })
            .catch(function (err) {
                // POST failed...
                res.send('Error');
            });


    }
    else
    {
        res.send('missing parameter')
    }
})

//Given a geolocation, your application lists all books mentioning a city in vicinity of the given geolocation.
router.post('/geoLocation', function (req, res) {
    var lat = req.body.lat;
    var long = req.body.long;
    if(lat != undefined && long != undefined)
    {
        var options = {
            method: 'POST',
            uri: 'http://localhost:3000/mysql/geoLocation',
            body: {
                lat:para,
                long:long
            },
            json: true // Automatically stringifies the body to JSON
        };

        rp(options)
            .then(function (parsedBody) {
                // POST succeeded...
                res.send(para);
            })
            .catch(function (err) {
                // POST failed...
                res.send('Error');
            });



    }
    else
    {
        res.send('missing parameters')
    }
})

module.exports = router;
