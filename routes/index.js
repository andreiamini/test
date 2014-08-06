var express = require('express');
var router = express.Router();
var jquery = require('jquery');
var http = require('http');

/* GET home page. */
router.get('/', function(req, res) {
   var url = 'http://data.police.uk/api/forces/west-midlands';

	http.get(url, function(res) {
	    var body = '';

	    res.on('data', function(chunk) {
	        body += chunk;
	    });

	    res.on('end', function() {
	        var response = JSON.parse(body)
	        console.log(response.url);
	    });
	}).on('error', function(e) {
	      console.log("Got error: ", e);
	});
});

module.exports = router;
