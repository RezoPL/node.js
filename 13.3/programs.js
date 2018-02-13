process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        case (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        }
        break;
        case (instruction === 'node') {
            process.stdout.write(node.version)
        }
        break;
    }
});