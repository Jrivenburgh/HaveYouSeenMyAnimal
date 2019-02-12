// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const PORT = process.env.PORT || 5000;
const users = require('./routes/user'); 
const path = require('path');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/', (req, res) => {
  
    res.send('root route');
});

//Static file declaration
app.use(express.static(path.join(__dirname, 'frontend/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'frontend/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/public/index.html'));
})



app.listen(PORT, (req, res) => {
    console.log(`server listening on port: ${PORT}`)
});