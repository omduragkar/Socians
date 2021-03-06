const mongoose=require('mongoose');
const signupschema = mongoose.Schema({
    email:
    {
        type:String,
        required: true,
        unique: true
    },
    password:
    {
        type:String,
        required: true
    },
    fname:
    {
        type:String,
        required: true
    },
    lname:
    {
        type:String,
        required: true
    }

},{
    timestamps: true
});
const User = mongoose.model('User',signupschema);
module.exports= User;
