const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.createConnection({ port: 8080 }, () => {
    console.log("Connected to chat server");
    askForInput();
});

client.on('data', (data) => {
    process.stdout.write(data.toString() + '\n');
});

client.on('end', () => {
    console.log("Disconnected from server");
    rl.close();
});

function askForInput() {
    rl.question('You: ', (message) => {
        if (message) {
            client.write(` ${message}`);
        }
        askForInput();
    });
}

process.on('SIGINT', () => {
    client.write('exit');
    client.end();
});