const mongoose = require("mongoose");
const User = require("../modles/user.model");
const asyncHandler = require("../utils/asyncHandler");

const createAdmin = asyncHandler(async()=>{
    const existAdmin = await User.findOne({role:"Admin"});
    if(existAdmin){
        console.log("Admin is already exist! " );
        return;
    }
    const admin = new User({
        name:"Admin",
        email:"admin@email.com",
        password:"admin123",
        role:"Admin"
    })
    await admin.save();
    admin.password = undefined;
    console.log("Admin user created successfully:", admin);
});
const ConnectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Db is connected successfully !:");
        createAdmin();
    } catch (error) {
        console.log("the error for connecting Db: " , error);
        process.exit(1);
    }
}
module.exports = ConnectDB;