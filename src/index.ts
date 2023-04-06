import datasource from "./connection/db";
import router from "./router/router";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 4011;

const app = express();

var corsOptons = {
	origin: "http://localhost:8080/"
		}
app.use (cors(corsOptons));
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));
var cookieParser = require('cookie-parser');
app.use(cookieParser()); //add this on server setup


app.use('/',router)
datasource

app.listen(PORT, () => {
console.log (`Server is running on port ${PORT}.` );
});