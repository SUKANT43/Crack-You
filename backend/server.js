const express=require('express');
const env=require('dotenv').config();
const app=express();
const connectDb=require('./config/db')
const cors=require('cors');
const transporter=require('./config/email');
app.use(cors());
app.use(express.json());

app.post('/send-test-email', async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,          
      to: 'ilakiya319@gmail.com',             
      subject: 'Test Email from Node.js App',
      text: 'Hello! This is a test email sent from the Express app using Nodemailer.',
});

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Test email sent successfully', messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send test email' });
  }
});




app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDb();
}
);