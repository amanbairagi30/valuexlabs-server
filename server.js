const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const dotenv = require("dotenv")
const User = require('./router/userroute')
const connectDatabase = require("./database/conn.js")
const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hackers know about this
dotenv.config({ path: ".env" })

const PORT = process.env.PORT || 8080

connectDatabase();
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

 
app.use("/api", User);

