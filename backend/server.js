const express=require('express');
const env=require('dotenv').config();
const app=express();
const {pool}=require('./config/db')
const cors=require('cors');
app.use(cors());
app.use(express.json());






app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    if(pool){
        console.log('Database connection successful');
    }else{
        console.log('Database connection failed');
    }
}
);