// run npm i to install package.json
// run npm init y to instal package-lock.json
// run nodemon to monitor the success of your javascript in real time
const express= require('express');
const path = require('path');
const app =express();
app.use(express.json());
app.use(express.static('public'))



