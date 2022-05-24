const asyncHandler = require("express-async-handler");
const User  = require("../models/userModel");
const generateToken = require("../util/generateToken");


  const registerUser = asyncHandler(async(req,res)=>{
   const {name,email,password,pic,describe,phone} = req.body;

   const userExist = await User.findOne({email});

   if(userExist){
         return res.status(400).json({
              msg: "User already exist"
         })
   }
 
    const user = await User.create({
        name,
        email,
        password,
        pic,
        describe,
        phone,
    });
  
     if(user){
          res.status(201).json({
              _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                pic: user.pic,
                describe: user.describe,
                phone: user.phone,
                token: generateToken(user._id),
          });
     }else{
         res.status(400);
         throw new Error("Error Occured");
     }
});


const authUser = asyncHandler(async(req,res)=>{

     const {email, password} = req.body;

     const user = await User.findOne({ email });
  
     if( user && (await user.matchPassword(password))){
         res.json({
             _id: user._id,
             name:user.name,
             email:user.email,
             isAdmin:user.isAdmin,
             pic:user.pic,
             describe:user.describe,
             phone:user.phone,
             token: generateToken(user._id),
         });
    }
     else{
        res.status(400);
        throw new Error("Invalid");
     }
 });

module.exports = {registerUser , authUser};