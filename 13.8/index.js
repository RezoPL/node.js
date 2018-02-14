var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/start') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            console.log('poprawne zapytanie');
            response.write(data);
            response.end();
		}); 
    
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.write('<img src="https://s3.amazonaws.com/lowres.cartoonstock.com/computers-error-computer_problem-computer_error-error_alarm-error_alert-mmon252_low.jpg">');
            response.end();
    }
});

server.listen(8080);