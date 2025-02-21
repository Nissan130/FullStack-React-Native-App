const { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

//register
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validation
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required",
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required",
      });
    }
    if (!password || password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Password is required and 6 character long ",
      });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User already registed with this email",
      });
    }
    //hashed password
    const hashedPassword = await hashPassword(password);

    //save user
    const user = await userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    return res.status(201).send({
      success: true,
      message: "Registration successfull. please login",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in registerd API",
      error,
    });
  }
};

//login
const loginController = async (req,res) => {
    try {
        //destructing
        const {email,password} = req.body;
        //vallidation
        if(!email ||!password) {
            return res.status(500).send({
                success:false,
                message:'please provide email or password'
            })
        }
        //find user
        const user = await userModel.findOne({email});
        if(!user) {
            return res.status(200).send({
                success:false,
                message:'user not found'
                
            })
        }
        //match password
        const match = await comparePassword(password, user.password);
        if(!match) {
            return res.status(500).send({
                success:false,
                message: 'Invalid password'
            })
        }

        //token jwt
        const token = await jwt.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:'7d'} );
        //undefined password
        user.password = undefined;
        res.status(200).send({
            success:true,
            message: 'login successful',
            token,
            user,
        })
    
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: 'Error in login api',
            error
        })
    }
};

module.exports = { registerController,  loginController };
