const express = require('express')
const app = express()
var path = require('path')
var lang = require('./constants')
import { LANGUAGES } from './constants';
const port = 3000

// todo: cannot import from a different file for some reason

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/locations', function (req, res) {
    const locations = ['Bay Area','Boston','New York','Chicago','Austin','Atlanta'];
    res.send(locations)
})

app.get('/languages', function (req, res) {
    // const languages = ['english', 'espanol', 'french', 'german', 'italiano'];
    res.send(LANGUAGES)
})

app.get('/inventory', function (req, res) {
    const items = [
        'cat', 
        'cat brush',
        'tabby cat', 
        'dog', 
        'german shepherd',
        'dog treats',
        'houseplants',
        'green plants'
        ];
    res.send(items)
})

app.post('/post-data', function (req, res) {
    res.send('Got a POST request')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
