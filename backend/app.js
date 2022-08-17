const express = require("express");
const cors = require("cors");
var mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	database: "career-crave",
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
