const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((request, response) => {
    const pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} recieved`);
    if(pathname === '' || pathname === '/') {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write('Empty response from server');
        response.end();
    } else {
        fs.readFile(pathname.substr(1), (error, data) => {
            if (error) {
                console.log(`Error reading file:  ${error}`);
                response.writeHeader(400, {"Content-Type": "text/html"});
                response.write('Not found on server');
                response.end();
            } else {
                response.writeHeader(200, {"Content-Type": "text/html"});
                response.write(data);
                response.end();
            }
        })
    }
}).listen(8081);

console.log(`Server running on http://127.0.0.1:8081`);
