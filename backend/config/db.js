const mongoose = require('mongoose');

const connectDb=()=>{
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log('Database connection successful');
    }
    catch(error){
        console.error('Database connection failed:', error);
        process.exit(1); 
    }
}

module.exports = connectDb;