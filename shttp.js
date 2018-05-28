var express = require('express') , bodyParser = require('body-parser'), fs = require('fs'), https = require('https');


var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('listening on port ' + port + '!');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/', function(request, response){
    	console.log(request.body);
    	console.log(request.headers);      
    	response.json(request.body);
});



