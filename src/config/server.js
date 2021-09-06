require('dotenv').config();
const express = require('express');
const routes = require('../app/routes');
const allowCors = require('./allowCors');

const app = express();

app.use(express.json());
app.use(allowCors);
app.use(routes);

module.exports = app;