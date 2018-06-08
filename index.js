const express = require('express');

const app = express();

app.get('/base64/:input', (req, res) => {
  const input = req.params.input;
  res.json({
    encoded: Buffer.from(input).toString('base64'),
    decoded: input,
  });
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}!`));
