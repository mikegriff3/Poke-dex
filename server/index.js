const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const db = require('./db/config');
const model = require('./db');
const router = require('./router');
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../static')));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use('/poke', router);

app.listen(PORT, (err) => {
	if (err){
		console.log('Error connecting to the server ', err);
	}else {
		console.log("Successfully connected to the server at PORT ", PORT);
	}
})