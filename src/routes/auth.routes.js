const router = require('express').Router();
const jwt = require('jsonwebtoken');
const adminMockModel = require('../mocks/Adminuser');

router.post('/admin/login',async (req,res)=>{
    
    const {
        username,
        password
    } = req.body;
    console.log(username);
    
    if(username === adminMockModel.username && password === adminMockModel.password){
          jwt.sign({adminMockModel},process.env.SECRET_KEY,{ expiresIn: '256h' },(err,token)=>{
            if(err){console.log(err)}
            res.send(token)
          })  // values 256h is valid  for example
    }
    else{
        console.log('ERROR: Could not log in');
    }
})
module.exports=router;