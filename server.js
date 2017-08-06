const express = require('express');
const helmet = require('helmet');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(helmet());
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});
