const express = require('express');
const app = express();

const digitoUnico = require('./digitoUnico');

const PORT = 3030 || process.env.PORT;

app.get('/:n/:k?', (req, res) => {
  const { n, k } = req.params;
  const result = digitoUnico(n, k, "log:");
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`[Digito Único] - Listening at http://localhost:${PORT}`)
});
