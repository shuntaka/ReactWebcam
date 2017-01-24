import express from 'express';
import fs from 'fs';
const app = express();

// index.html
app.get('/booth', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// photo.js
app.get('/js/photo.js', (req, res) => {
  res.sendFile(`${__dirname}/js/photo.js`);
});

// main.css
app.get('/css/main.css', (req, res) => {
  res.sendFile(`${__dirname}/css/main.css`);
});

const server = app.listen(8082, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}${port}`);
});
