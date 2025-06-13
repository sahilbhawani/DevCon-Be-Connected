const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');

// app.get("/user/:UserId", (req,res) => {
//     console.log(req.params);
//     res.send({firstName:"sahil" , LastName:"Bhawani"})

// },
// (req,res) => {

// }
// );

// app.use("/test", (req,res) => {
//     console.log("Hello 1");
//     res.send("Done 1");
// }
// );

// app.get("/user", (req,res,next) => {
//     console.log("Hello 1");
//     res.send("Done 1");
//     next();
// },
// (req,res) => {
//     console.log("Hello 2");
//     // res.send("Done 2");
//     // console.log("Hello 3");
// }
// );

app.post("/signup", async (req,res) => {
    const user = new User({
        firstName: "Sahil",
        lastName: "Bhawani",
        emailId: "sbhawani@gmail.com",
        password: "Sahil@123"
    });
    
    try{
        await user.save();
        res.send("User Added Successfully!");
    }
    catch(ex){
        res.status(400).send("Error while saving data" + ex.message);
    }

});

connectDB().then(() => {
    console.log("database connected successfully");
    app.listen(3000, () => {
        console.log("Server is successfully listening on port 3000");
    });
})
.catch((err) => {
    console.error("Connection Failed");
});
