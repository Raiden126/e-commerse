const mongoose = require("mongoose")

const mongodbUrl = "mongodb+srv://tanujpaul200:RsApzCEeqqzjwPJg@cluster0.in9u6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = () => {
    return mongoose.connect(mongodbUrl);
}

module.exports = {connectDb};