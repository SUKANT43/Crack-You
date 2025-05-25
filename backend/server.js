const express=require('express');
const env=require('dotenv').config();
const app=express();
const connectDb=require('./config/db')
const cors=require('cors');
const transporter=require('./config/email');
app.use(cors());
app.use(express.json());
const userRoute=require('./route/auth/user')
app.use('/api/user',userRoute);




app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDb();
}
);