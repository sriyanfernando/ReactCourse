const mongoose = require('mongoose')
const Schema = mongoose.Schema
      
let userSchema = new Schema({

    first_name:{type : String},
    last_name:{type : String},
    email:{type : String , required:true},
    password : {type : String , required : true},
    date:{type : Date, default : Date.now}

},{
    collection : 'users'
})
module.exports = mongoose.model('User', userSchema)

