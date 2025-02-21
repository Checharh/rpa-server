import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import path from 'path'
let compression = require('compression');
let cookieParser = require('cookie-parser');
let cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

/*
app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(port, () => {
return console.log(`Express is listening at http://localhost:${port}`);
});
*/
const json_file_path = path.resolve(__dirname, "fake_data.json");
const json_file = require(json_file_path);
const server = http.createServer(app);

server.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(require(json_file_path)));
  //res.json(json_file);
});