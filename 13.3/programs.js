process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var node = process.version;
    var LANG = process.env;
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
        break;
        case '/node':
            process.stdout.write('Node version:' + node + '\n')
        	break;
        case '/lang':
            process.stdout.write('User system language:' + LANG + '\n')
        	break;
        default:
        	process.stdout.write('Wrong instruction!\n');
        }
    }
});