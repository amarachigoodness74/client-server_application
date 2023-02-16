const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    const pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} recieved`);
    response.writeHead(200, { 'Content-Type': 'tet/html' });
    response.write('Response from server');
    response.end();
}).listen(8081);

console.log(`Server running on http://127.0.0.1:8081`);
