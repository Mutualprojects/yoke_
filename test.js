import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "yokeconveyors@gmail.com",
        pass: "oouoybhscosozktp"
    }
});

transporter.verify()
.then(() => console.log("SMTP OK"))
.catch(console.error);
