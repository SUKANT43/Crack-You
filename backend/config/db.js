const mongoose=require('mongoose');

function dbConnect(){
    try{
        const connect=mongoose.connect(process.env.MONGO_URL);
        if(connect){
            console.log("db connected to the server...");
        }
        else{
            console.log("some error occured in db connecting");
        }
    }
    catch(e){
        console.log(e.message);
    }
}

module.exports=dbConnect;