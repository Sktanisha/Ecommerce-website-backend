
const nodemailer = require("nodemailer");
exports. sendEmail = async()=>{
    const transporter = nodemailer.createTransport({
  host: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

const info = await transporter.sendMail({
    from:  process.env.AUTH_EMAIL,
    to:  "sanjidatanisha99@getMaxListeners.com",
    subject: "Hello", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>",
  });


}