const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",  // Gmail's service name
    auth: {
        user: "manikandan2112018_bai26@mepcoeng.ac.in",
        pass: "*****************"  // Use an App Password, not your regular Gmail password
    }
});

const mail = {
    from: "manikandan2112018_bai26@mepcoeng.ac.in",
    to: "manikandan2112a18@gmail.com",
    subject: "hi",
    text: "hello"
};

transporter.sendMail(mail, (error, info) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent successfully:", info.response);
    }
});
