const express=require('express');
const env=require('dotenv').config();
const app=express();
const connectDb=require('./config/db')
const cors=require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
const userRoute=require('./route/auth/userRoute')
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use((req,res,next)=>{
    console.log(`${req.method} request for '${req.url}'`);  
    next()
})
app.use('/api/user',userRoute);




app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDb();
}
);