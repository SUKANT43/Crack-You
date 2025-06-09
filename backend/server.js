const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const cors=require('cors');
const db=require('./config/db')
app.use(cors());
app.use(express.json());

const port=process.env.PORT || 3000;









app.listen(port,()=>{
    db();
    console.log(`Server is running on port ${port}`);
})










