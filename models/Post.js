const mongoose = require('mongoose');


//Schema is how you'd want your databe to look
/*
The term "schema" refers to the organization of data as a blueprint of how the database is constructed (divided into database tables in the case of relational databases).
*/
//create a schema
const PostSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        required:Date.now
    }
})

//export
module.exports = mongoose.model('Posts', PostSchema)