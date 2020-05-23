const mongoose = require("mongoose");
const config = require("config");
const db = config.get('mongoURI');

const connectDB = async () => {

    try {
        await mongoose.connect(db, {
            // parameters to pass to avoid warnings while mongoose db connection
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;