const User = require('../models/user');
const moongose = require("mongoose");
const { JWT_SECRET} = require('../keys');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = (req,res) => {
    const {name, email, password, location} = req.body
    if(!name || !email || !password || !location){
        return res.status(422).json({error: "Please make sure all fileds are filled."})
    }
    User.findOne({email: email})
    .then((saveduser) =>{
        if(saveduser){
            return res.status(422).json({error: "Email already exists."})
        }
        bcrypt.hash(password,15)
        .then(hashedPassword=>{
            const user = new User({
                name:name,
                email:email,
                location:location,
                password:hashedPassword
        })
        user.save()
        .then(user=>{
            res.json({message: "Ho gya Login ! Yayyy!!"})
        }).catch(err=>{
            console.log(err);
        })
    })
    })
}
exports.signin = (req,res)=>{
    const{email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error: "make sure all fields are filled."})
    }
    User.findOne({email:email})
    .then(saveduser => {
        if(!saveduser){
            return res.status(422).json({error: "provide valid credentials."})
        }
        bcrypt.compare(password,saveduser.password)
        .then(ismatch => {
            if(!ismatch){
                return res.status(422).json({error: "please provide valid credentials"})
            }
            
            else
            {
                const token = jwt.sign({_id:saveduser._id, role:saveduser.role},JWT_SECRET,{expiresIn: "1d"});
                res.cookie("token", token, {expiresIn: "1d"});

                const{_id,name,email,location, role} = saveduser
                res.status(201).json({token:token, user:{_id,name,email, location, role}})
            }
        }).catch(err => {console.log(err);})
    });
}

exports.signout = (req, res) =>{

    res.clearCookie("token");
    res.status(200).json({
        message: "signout Successfully..."
    });

}