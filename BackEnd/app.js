require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

//database connection
const connectDB = require('./DBconnect/db_connect.js');
connectDB();

//Port
const port = process.env.PORT || 8000;

//starting a server
app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
});