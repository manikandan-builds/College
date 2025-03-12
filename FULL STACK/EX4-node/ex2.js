const https = require('https');

const url = 'https://www.google.com'; 

https.get(url,(res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);  
    });

});
