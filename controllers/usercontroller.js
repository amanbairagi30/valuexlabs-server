const User = require("../model/userModel.js");


const nodemailer = require("nodemailer");


exports.registerUser = async (req, res, next) => {
    try {



        const newUser = new User(req.body);
        await newUser.save();
        // console.log(newUser)
        // console.log("In the register")
        next();
        // console.log("after register")

    } catch (error) {
        next(error);
    }

}



exports.sendMail = async (req, res) => {
    // console.log("--> next ,In the mail ")

    let { name, email, message, projectType } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,

                pass: process.env.PASS
            }
        })


        const recipients = [process.env.MEMBER1, process.env.MEMBER2];

        const Finalmessage = {
            from: process.env.EMAIL,
            to: recipients,
            subject: "New Connection Alert 🔊",
            html: `
            <div>
                <p style="font-size : 1.5rem; color:#fff;">We have a new connection! 🙌</p>
                <br/>
                <p style="margin-top : 2rem; color:#fff;">Greetings from <strong>${name}</strong>,</p>
                <ul style="margin-top : 2rem; color:#fff;">
                    <li>📩<strong>Email:</strong> ${email}</li>
                    <li>📜<strong>Project Required</strong>: ${projectType}</li>
                    <li>📂<strong>Message:</strong> ${message}</li>
                </ul>
                <p style="color:#fff;">Let's Close this Deal Team !🚀<br/> <strong>ValueXlabs</strong></p>
            </div>
        `
        }

        const info = await transporter.sendMail(Finalmessage)
        if (info) {

            res.send({
                success: true,
                message: "Thanks for contacting us , we will get back to you in 24 hours"
            })
        }

    } catch (error) {
        res.send({
            success: false,
            message: "Something Went wrong"
        })
    }
}



