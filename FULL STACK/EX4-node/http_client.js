const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sendMessage = (message) => {
    const options = {
        hostname: 'localhost',
        port: 4000,
        path: '/',
        method: 'POST',
    };

    const req = http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(`Server Response: ${data}`);
            promptForMessage(); // Ask for the next message
        });
    });

    req.write(message);
    req.on('error', (error) => {
        console.error(`Error: ${error.message}`);
    });

    req.end();
};

const promptForMessage = () => {
    rl.question('Enter your message: ', (message) => {
        if (message.toLowerCase() === 'exit') {
            console.log('Exiting... Goodbye!');
            rl.close();
            return;
        }
        sendMessage(message);
    });
};

promptForMessage(); // Start prompting for messages
