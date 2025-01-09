// conectando o banco com um try catch via mongoose.
const mongoose = require('mongoose');
const connectDB = async () => {

    try{
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected: ${conn.connection.host}`);
    } catch (error){
        console.log(error);
    }
}

module.exports = connectDB;