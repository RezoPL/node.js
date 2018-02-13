process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var node = node.version;
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
        break;
        case '/node':
            process.stdout.write('Node wersion:' node)
        	break;
        default:
        	process.stdout.write('Wrong instruction!\n');
        }
    }
});