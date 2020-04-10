import express from 'express'
import path from 'path'
import { LANGUAGES, LOCATIONS, ITEMS } from './constants.mjs';

const app = express();
const port = 3000;
const __dirname = path.resolve(path.dirname(''));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/locations', function (req, res) {
    res.send(LOCATIONS)
})

app.get('/languages', function (req, res) {
    res.send(LANGUAGES)
})

app.get('/inventory', function (req, res) {
    res.send(ITEMS)
})

app.post('/post-data', function (req, res) {
    res.send('Got a POST request')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
