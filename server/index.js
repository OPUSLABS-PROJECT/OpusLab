const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

var port = process.env.PORT || 3000;
app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
})

app.listen(port, function() {
    console.log('listening on port 3000!');
});

module.exports = app
