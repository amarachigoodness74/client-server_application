const http = require('http');

const options1 = {
    host: 'localhost',
    port: '8081',
    path: ''
};

const options2 = {
    host: 'localhost',
    port: '8081',
    path: '/'
};

const options3 = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'
};

const options4 = {
    host: 'localhost',
    port: '8081',
    path: '/wrong_file.html'
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

const request1 = http.request(options1, calback);
request1.end();
const request2 = http.request(options2, calback);
request2.end();
const request3 = http.request(options3, calback);
request3.end();
const request4 = http.request(options4, calback);
request4.end();