const FormData =require('form-data');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const asyncHandler = require('express-async-Handler');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async(req,res) =>{
    const { username , email ,password } = req.body;

    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400)
        throw new Error("User already Exists");
    }

    const user = await User.create({
         username,
         email,
         password,   
    });

    if (user) {
        res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email,
            token:generateToken(user._id),
        });
       
    } else {
        res.status(400);
        throw new Error("Error Occured");
    }
});

const authUser = asyncHandler(async(req,res) =>{
    const { email ,password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            username:user.username,
            email:user.email,
            token:generateToken(user._id),
        
        });
        console.log("Login successful")
    }else {
        res.status(400);
        throw new Error("Invalid Email or Password  ! ");
    }
});

const bgRemover=asyncHandler(async(req,res)=>{
  //  const {image} = req.body;
  //  const imageData = image.substring(image.indexOf(",") + 1);
  // fs.writeFileSync("sample.jpeg", imageData, { encoding: "base64" });

   const inputPath = "sample.jpeg";
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append(
    "image_file",
    fs.createReadStream(inputPath),
    path.basename(inputPath),
  );

  axios({
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    data: formData,
    responseType: 'arraybuffer',
    headers: {
      ...formData.getHeaders(),
      'X-Api-Key': `${process.env.REMOVE_BG_API_KEY}`,
    },
    encoding: null
  })

  .then((response) => {
    if(response.status != 200) 
    return console.error('Error:', response.status, response.statusText);
    
    console.log("Done:", response.status, response.statusText);
    return res.status(200).json({
      message: "Image is uploaded successfully",
      image: response.data,
    });
  })
  .catch((error) => {
      return console.error('Request failed:', error);
  });
});

module.exports={registerUser , authUser ,bgRemover } ;