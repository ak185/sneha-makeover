/**
 * Authentication Controller
 */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");


class AuthController {

    // Register User funtion

    async register(req, res) {
        try {
            const {first_name, last_name, email, phone, password} = req.body;

            if(!first_name || !last_name || !email || !password) {
                return res.status(400).json({
                    message: "Required fileds are missing"
                });
            }

            const userExist = await User.getUserByEmail(email);
            if(userExist){
                return res.status(400).json({
                    message: "This User is already exists"
                }); 
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.createUser({
                first_name, 
                last_name, 
                email, 
                phone, 
                password: hashedPassword
            });

            return res.status(201).json({
                success: true,
                message: "User Register Successfully",
                user: user
            });

        } catch (error) {
            res.status(500).json(error);            
        }
    }

    // Login User Function

    async login(req, res) {
        try {
            const {email, password} = req.body;

            if(!email || !password) {
                return res.status(400).json({
                    message: "Required fileds are missing"
                });
            }

            const user = await User.getUserByEmail(email);

            if(!user){
                return res.status(401).json({
                    message: "This User is not found"
                });
            }

             const isMatched = await bcrypt.compare(password, user.password);

              if(!isMatched) {
                return res.status(401).json({
                    message: "Invalid credentials"
                });
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d"
                }
            );

            res.cookie("token", token, {
                httpOnly: true
            });

            const userData = user.toObject();

            delete userData._id;
            delete userData.password;
            
            return res.status(200).json({
                success: true,
                message: "Login Successfull",
                token,
                user: userData
            });

        } catch (error) {
            return res.status(500).json(error);
        }
    }

    // Dashboard
    dashboard(req, res){
        return res.json({
            message: "Welcome to Dahsboard",
            user: req.user
        });
    }

}

module.exports = new AuthController();