const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect(
        "mongodb+srv://sahilbhawani7:ysXE8hZW7leQdRPF@nodecluster.xqp7pro.mongodb.net/devTinder"
    );
};

module.exports = connectDb;