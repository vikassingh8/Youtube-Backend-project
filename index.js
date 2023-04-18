const express = require("express");
const app = require("./src/app")
const mongoose = require('mongoose');
const port = 3000;

// Connect to DATABASE
const DATABASE_URL = 'mongodb+srv://vikas:ZpOZzyAfBaophXEx@cluster0.gx4xuwg.mongodb.net/youtube?retryWrites=true&w=majority';
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))