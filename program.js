process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var version = process.versions;
    var node = node.version;
    var ns = node.toString()
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction)
        case '/exit': {
            process.stdout.write('Quitting app!' + ns);
            process.exit();
        } 
        case: !'/exit' {
            process.stdout.write('Wrong instruction!\n');
        }
    }
});