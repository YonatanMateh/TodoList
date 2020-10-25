module.exports = {
    port: process.env.PORT || 8000,
    environment: process.env.NODE_ENV || "development",
    mongodbUrl:  process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/todoDB"
};