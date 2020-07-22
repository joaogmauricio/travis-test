const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 80;

app.get('/', (request, response) => {
  response.json({
    hello: 'wor..#$%$%..evil...$%#!',
  });
});

// keep this endpoint in your running application
// it is used by the kubernetes health check, so return HTTP 200 OK if all is fine
app.get('/healthz', (request, response) => {
  // run checks to make sure your app is fine, and return at least http 200 status code
  response.json({
    commit_sha: process.env.GIT_COMMIT_SHA,
    status: 'HEALTHY',
  });
});

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});
