const express=require('express');
const env=require('dotenv').config();
const app=express();
const {pool}=require('./config/db')





app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    if(pool){
        console.log('Database connection successful');
    }else{
        console.log('Database connection failed');
    }
}
);