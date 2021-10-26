//import express
const express = require('express');

//execute express
const app = express();

//import database
const mongoose = require('mongoose');

/*
 Body-parser is the Node. js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it.
 */
//Body Parser
const bodyParser = require('body-parser');

//get acces to the doeEnv file
require('dotenv/config');

/*middleware => are function that executes when a routes is being hit.
Middleware functions => are functions that have access to the request object ( req ), the response object ( res ), and the next middleware function in the application's request-response cycle.*/

/*middleware
app.use('/posts', () => {
    console.log('middleware running')
})
*/

app.use(bodyParser.json());

/* Connect to a Database*/
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to mongo');
});


//import routes
const postRoute = require('./routes/posts');

//middleware post
app.use('/posts', postRoute)

//Routes
//req = request
//res = response
app.get('/',(req, res) => {
    //response
    res.send('i have your response')
})



//before creating a route how do we listen to a server
//take the variable applied to execute express, give it a listen event then add the port you want to listen on
app.listen(3000);


