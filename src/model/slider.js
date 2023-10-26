const mongoose=require("mongoose");

const slider=mongoose.Schema({
    tittle:String,
    subTittle:String,
    imagesUrl:String,
    class:String
});


module.exports=mongoose.model("slider", slider)
// module.exports=mongoose.model("detail", detail);