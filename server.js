var express = require('express');
var path = require('path');
var fs = require('fs');
var app =express();

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/profile-picture', (req, res) =>{
    var img = fs.readFileSync('images/profile-1.jpg');
    res.writeHead(200, {'Content-Type' : 'image/jpg'});
    res.end(img, 'binary');
});

app.listen(3000, () => console.log('app listening on port 3000!'));