/**
 * Mongo DB Configrations 
 */

const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Mongo DB is connected");
        
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connection;