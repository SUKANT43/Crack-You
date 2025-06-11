const nodemailer=require('nodemailer');

const transport=nodemailer.createTestAccount({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
    }
});


module.exports=transport;