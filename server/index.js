const express = require('express');
const app =  express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "12345678",
	database: "banking"
})

app.post('/getuser', (req, res) => {
	const { username, password } = req.body;
	db.query(
		`SELECT * FROM users WHERE username='${username}' AND password='${password}'`,
		(err, result) => {
			if(err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
})

app.post('/create', (req, res)=> {
	const {name, age, contact, username, password} = req.body;
	db.query(
		'INSERT INTO users (name, age, contact, username, password) VALUES (?,?,?,?,?)',
		[name, age, contact, username, password],
		(err, result) => {
			if(err) {
				console.log(err)
			} else {
				res.send("user created ")
			}
		}
	);
})

app.listen(3001, ()=>{
	console.log("Hello all okay");
	db.connect((err)=> {
		if(err) {
			console.log(err);
		}
		console.log('Database connected');
	})
})