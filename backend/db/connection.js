
const mongoose = require('mongoose');
const config = require("../config/index")

const connect = async () => {
    await mongoose.connect(config.mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log("DB connected...");
}

module.exports = connect;