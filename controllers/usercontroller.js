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

    let { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,

                pass: process.env.PASS
            }
        })


        const recipients = ["aman   bairagi1089@gmail.com", "dakshsinghk2524@gmail.com"];

        const Finalmessage = {
            from: process.env.EMAIL,
            to: recipients,
            subject: "There is a new connection here",
            text: `Greetings from ${name},\nEmail : ${email}\ni want to say ${message}`
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



