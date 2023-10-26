const mongoose=require('mongoose');

const Contact=mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    message:String
});

module.exports=mongoose.model("query", Contact);