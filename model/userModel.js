const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
       
    },        
    email: {
        type : String,
        required : true,
       
    } ,
  
    message: {
        type : String,
        required : true,
        
    }, 
   

})
const model = mongoose.model("user",userSchema)
module.exports = model;