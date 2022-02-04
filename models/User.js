const mongoose = require('mongoose')

//for depracation warning
mongoose.set('useCreateIndex', true);

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    start_time:{
        type:String,
        required:true
    },
    end_time:{
        type:String,
        required:true
    },
    breakfast:{
        type:String,
        required:true
    },
    lunch:{
        type:String,
        required:true
    },
    dinner:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('User',userSchema)//directly exporting the model