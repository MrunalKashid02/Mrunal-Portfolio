const nodemailer= require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
})

const sendEmailController =(req,res)=>{
    try {
        const {email,subject,msg}=req.body
        if(!subject || !email || !msg){
            return res.status(500).send({
                success:false,
                message:'Please provide All Fields'
            })
        }
        var mailOptions={
            to:email,
            from:process.env.EMAIL,
            subject:subject,
            text:msg,
        }
        transporter.sendMail(mailOptions);
        return res.status(200).send({
            success:true,
            message:"Your Message Send Successfully",
        })
       
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Send Email API Error',
            error
        });
    }
}
module.exports={sendEmailController};