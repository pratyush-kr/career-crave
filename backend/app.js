const express = require("express");
const cors = require("cors");
var mysql = require("mysql");
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
	host: "localhost",
	database: "career_crave",
	user: "pratyush",
	password: "Impraty8533!",
});

connection.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("connection success");
	}
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/getEmail", (req, res) => {
	console.log(req.body);
	res.send("matched");
});

const server = app.listen(8080, () => {
	var host = server.address().address;
	var port = server.address().port;
	console.log("listening on %s:%s", host, port);
});
