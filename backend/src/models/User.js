const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        max:40,
        min:4,
    },
    email:{
        type:String,
        required:true,
        max:255,
        min:6,
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6,
    },
});

userSchema.pre('save' , async function (next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
}); 

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  

module.exports = mongoose.model('User' , userSchema)