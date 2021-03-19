const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db= mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to the Mongodb"));

db.once('open',function(){
    console.log('Connected to the database :: MongoDB');
});

module.exports = db;