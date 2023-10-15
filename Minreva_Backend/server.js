var express  = require('express');
var app = express();

const mongoose = require("mongoose");
const cors = require("cors");
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(
    cors({
    origin: "http://localhost:3000" 
    })
);
mongoose.connect("mongodb://localhost:27017/blogpost");

const UserSchema = new mongoose.Schema({
    title:String,
    genre:String,
    content:String,
    author:String
})

const User = mongoose.model("User",UserSchema)

let len = 0;

app.get("/",async(req,res)=>{

    await User.find().then((result)=>{
        res.send(result);
        len = result.length
    }).catch()

});

app.post("/",async(req,res)=>{
    const {title,genre,content,author} = req.body
    console.log(title)
    const user = new User({
        title,
        genre,
        content,
        author
    })
    res.send(user.content)
    user.save()
});

app.post("/submit",async (req, res)=> {
    const { name, email, password} = req.body
    const data = await User.findOne({email: email})
    if(data != null){
        res.send({message: "User already registerd"})
    } else {
        const user = new User({
            name,
            email,
            password
        })
        user.save()
    }
})

app.listen(3001,()=>{
    console.log("server is up and running");
});