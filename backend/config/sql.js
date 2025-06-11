const mysql=require('mysql2');


const connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Root@4794',
    database:'crackYoou'
});

const checkConnection=()=>{
    if(connection){
        console.log('sql connected successfully');
    }
    else{
        console.log('something went wrong');
    }
};


module.exports={checkConnection,connection};