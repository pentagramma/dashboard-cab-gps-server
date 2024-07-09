const mongoose = require('mongoose')

const connectMongo = async () => {

    try {
        const db = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${db.connection.host}`);
    } catch (error) {
        console.log("Error connecting to MongoDB :", error);
        process.exit(1);
    }
}

module.exports = connectMongo