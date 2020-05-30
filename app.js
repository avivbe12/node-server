const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors'); 
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Import Routes
const routes = require('./routes/index.js');
app.use('/api/v1', routes(router));


app.use('/api/v1', (req, res, next) => {
    res.send('Hello');
    next();
});


  
app.listen(process.env.PORT, () => {
    console.log(`Server now listening at localhost:` + process.env.PORT);
});
  
module.exports = app;

// //Connect to DB
// mongoose.connect(process.env.DB_CONNECTION
// ,{ useNewUrlParser: true, useUnifiedTopology: true }
// ,() => {
//     console.log('connected to DB!');
// });

// //How do we start listening to the server
// app.listen(process.env.PORT);