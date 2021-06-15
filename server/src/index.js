'use strict';

var path = require('path');
var http = require('http');
const cors = require('cors');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
  routing: {
    controllers: path.join(__dirname, './controllers'),
  },
};

var expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, 'api/openapi.yaml'),
  options,
);
var app = expressAppConfig.getApp();

app.use(cors());

let corsMiddleware = app._router.stack.pop();

const expressInitIndex = app._router.stack.findIndex(
  (middleware) => middleware.name === 'expressInit',
);

if (expressInitIndex) {
  app._router.stack.splice(expressInitIndex + 1, 0, corsMiddleware);
}

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
  console.log(
    'Your server is listening on port %d (http://localhost:%d)',
    serverPort,
    serverPort,
  );
  console.log(
    'Swagger-ui is available on http://localhost:%d/docs',
    serverPort,
  );
});
