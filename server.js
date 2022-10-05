// Dependencies
const express = require('express');
const path = require('path');
const app = express();

const port = 3001;

// Setting up Express App to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

