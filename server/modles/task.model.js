const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        required:true,
        lowercase:true
    },
    phoneNumber:{
        type:String,
        trim:true,
        required:true,
    },
    notes:{
        type:String,
        trim:true,
        required:true,
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
} , {timestamps:true});

const Task = mongoose.model("Task" , taskSchema);
module.exports = Task;