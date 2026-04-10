
const nodemailer = require("nodemailer");
exports.sendEmail = async (email,otp, emailtype) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: emailtype == "verify"? "OTP verification ": "Forget Password - Verification Code",
        html: emailtype == "verify"?
        `<!doctypehtml><meta charset="UTF-8"><title>OTP Email</title><body style="margin:0;padding:0;background-color:#f4f4f7;
        font-family:Arial,Helvetica,sans-serif"><table border="0"cellpadding="0"cellspacing="0"role="presentation"style="background-color
        :#f4f4f7;padding:30px 0"width="100%"><tr><td align="center"><table border="0"cellpadding="0"cellspacing="0"role="presentation"
        style="max-width:600px;background-color:#fff;border-radius:10px;overflow:hidden"width="600"><tr><td align="center"style=
        "background-color:#111827;color:#fff;padding:24px 20px;font-size:24px;font-weight:700">Ecommerce app<tr><td align="center"
        style="padding:35px 30px;color:#333"><h2 style="margin:0 0 15px;font-size:22px;color:#111827">Your One-Time Password</h2>
        <p style="font-size:15px;line-height:1.6;color:#4b5563;margin:12px 0">Hello,<p style="font-size:15px;line-height:1.6;
        color:#4b5563;margin:12px 0">Use the OTP below to complete your verification process. This code is valid for the next 
        <strong>10 minutes</strong>.<div style="display:inline-block;margin:25px 0;padding:16px 32px;font-size:30px;font-weight:700;
        letter-spacing:8px;color:#111827;background-color:#f3f4f6;border:2px dashed #d1d5db;border-radius:8px">  ${otp}</div>
        <p style="font-size:14px;color:#6b7280;margin:12px 0">Do not share this code with anyone for security reasons.<p style="font-size:
        14px;color:#6b7280;margin:12px 0">If you did not request this code, please ignore this email.<tr><td align="center"style="padding:
        20px;font-size:12px;color:#9ca3af;background-color:#f9fafb">© 2026 Your Company. All rights reserved.</table></table>` : 
        
       `
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Password Reset</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f7;font-family:Arial,Helvetica,sans-serif">

<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7;padding:30px 0">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border-radius:10px;overflow:hidden">

<!-- Header -->
<tr>
<td align="center" style="background-color:#111827;color:#ffffff;padding:24px 20px;font-size:24px;font-weight:700">
Ecommerce App
</td>
</tr>

<!-- Body -->
<tr>
<td align="center" style="padding:35px 30px;color:#333333">

<h2 style="margin:0 0 15px;font-size:22px;color:#111827">
Reset Your Password
</h2>

<p style="font-size:15px;line-height:1.6;color:#4b5563;margin:12px 0">
Hello,
</p>

<p style="font-size:15px;line-height:1.6;color:#4b5563;margin:12px 0">
We received a request to reset your password. Click the button below to create a new password.
This link will expire in <strong>10 minutes</strong>.
</p>

<!-- Button -->
<div style="display:inline-block;margin:25px 0;padding:16px 32px;font-size:30px;font-weight:700;
        letter-spacing:8px;color:#111827;background-color:#f3f4f6;border:2px dashed #d1d5db;border-radius:8px">  ${otp}</div>
style="display:inline-block;margin:25px 0;padding:14px 28px;font-size:16px;font-weight:600;
color:#ffffff;background-color:#111827;text-decoration:none;border-radius:6px">
Reset Password
</a>

<p style="font-size:14px;color:#6b7280;margin:12px 0">
If you did not request a password reset, please ignore this email.
</p>

<p style="font-size:14px;color:#6b7280;margin:12px 0">
For security reasons, do not share this link with anyone.
</p>

</td>
</tr>

<!-- Footer -->
<tr>
<td align="center" style="padding:20px;font-size:12px;color:#9ca3af;background-color:#f9fafb">
© 2026 Your Company. All rights reserved.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>`
, 















    });


}