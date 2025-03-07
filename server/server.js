const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')


//DOTENV config
dotenv.config();

//MongoDB database connection
connectDB();

//REST OBJECT
const app = express();

//midleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//ROUTES
// app.get("",(req,res)=>{
//     res.status(200).json({
//         success: true,
//         message: "Welcome ",
//     });
// })

app.use("/api/v1/auth", require("./routes/userRoutes"));

//Port
const PORT = process.env.PORT || 8080;

//port listen
app.listen(PORT,()=>{
    console.log(`Server is running on localhost:${PORT}`);
})
