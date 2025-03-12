const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log(`Received message from client: ${body}`);
            
            const wordCount = body.trim().split(/\s+/).length; // Counts words
            const charCount = body.length;

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Message Length: ${charCount} characters\nWord Count: ${wordCount} words`);
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from the server!');
    }
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
