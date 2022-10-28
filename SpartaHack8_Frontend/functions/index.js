const functions = require("firebase-functions");
const express = require('express');
const PORT = 8000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/materials'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render(`index`);
    res.status(200).send()
});
exports.app = functions.https.onRequest(app);