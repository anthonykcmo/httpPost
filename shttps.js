var express = require('express') , bodyParser = require('body-parser'), fs = require('fs'), https = require('https');

var options = {
    key: fs.readFileSync( './localhost.key' ),
    cert: fs.readFileSync( './localhost.cert' ),
    requestCert: false,
    rejectUnauthorized: false
};

var app = express();
var port = process.env.PORT || 3000;
var server = https.createServer( options, app );

server.listen( port, function () {
    console.log( 'Express server listening on port ' + server.address().port );
} );

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/', function(request, response){
    	console.log(request.body);
    	console.log(request.headers);      
    	response.json(request.body);
});



