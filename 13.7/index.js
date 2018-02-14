var fs = require('fs');
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log(data);
});