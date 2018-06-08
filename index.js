const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

app.post('/base64', (request, response) => {
  const { body } = request;
  const result = {};
  if (body.encoded) {
    result.decoded = Buffer.from(body.encoded, 'base64').toString();
    result.encoded = body.encoded;
  } else if (body.decoded) {
    result.decoded = body.decoded;
    result.encoded = Buffer.from(body.decoded).toString('base64');
  } else {
    response.json({error: "No encoded nor decoded attributes provided in posted body"});
    return;
  }

  response.json(result);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}!`));
