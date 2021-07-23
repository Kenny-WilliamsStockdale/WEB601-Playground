const http = require('http');
//const test = require('./test');
const routes = require('./routes');

const server = http.createServer(routes.handler);

server.listen(3000)