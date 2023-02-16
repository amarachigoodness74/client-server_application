const http = require('http');

const options = {
    host: 'localhost',
    port: '8081',
    path: '/index.htm'
};

const calback = (response) => {
    let body = '';
    response.on('data', data => {
        body += data;
    });
    response.on('end', () => {
        console.log(`Client recieved the following data from server: \n ${body}`);
    });
}

const request = http.request(options, calback);
request.end();