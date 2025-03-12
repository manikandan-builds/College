const http = require('http');

const server = http.createServer((req, res) => {
    const cookies = req.headers.cookie;

    if (cookies) {
        console.log('Cookies found:', cookies);
        res.end('Cookies are present: ' + cookies);
    } else {
        console.log('No cookies found in request');
        res.end('No cookies found in the request');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});