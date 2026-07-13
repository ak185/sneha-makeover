/**
 * Authentication middleware
 */

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token = (req.cookies.token) ? req.cookies.token : "";

    if(!token){
        return res.status(401).json({
            maessage: "Token is missing"
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;
        
        next();

    } catch (error) {

        return res.status(401).json({
            maessage: "Invalid Token",
            error: error
        });       

    }

}

module.exports = auth;