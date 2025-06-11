const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const cors=require('cors');
const db=require('./config/db');
const {connection,checkConnection}=require('./config/sql')
const port=process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

//router
const userRegisterRouter=require('./router/user/userRegisterRouter')


app.use('/api/register',userRegisterRouter)









app.listen(port,()=>{
    db();
    checkConnection();
    console.log(`Server is running on port ${port}`);
})










