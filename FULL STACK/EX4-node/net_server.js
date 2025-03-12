const net = require('net');
const readline = require('readline');

const clients = [];

// Create a readline interface for server input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const server = net.createServer((client) => {
    console.log('New client connected');
    clients.push(client);

    // Notify all clients when a new client connects
    broadcastMessage('A new user has joined the chat.');

    client.on('data', (data) => {
        const message = data.toString();
        console.log(`${message}`);
        
        // Broadcast the message to all clients
        broadcastMessage(message);
    });

    client.on('end', () => {
        console.log('Client disconnected');
        clients.splice(clients.indexOf(client), 1);
        broadcastMessage('A user has left the chat.');
    });

    client.on('error', (err) => {
        console.error(`Client error: ${err}`);
    });
});

// Function to send a message to all clients
function broadcastMessage(message) {
    clients.forEach((client) => {
        client.write(message);
    });
}

// Function to handle server input
function handleServerInput() {
    rl.question('Server: ', (message) => {
        if (message) {
            broadcastMessage(`${message}`);
        }
        handleServerInput(); // Prompt for the next message
    });
}

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Chat server is running on port ${PORT}`);
    handleServerInput(); // Start listening for server input
});