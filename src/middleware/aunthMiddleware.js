const HttpException = require('../utils/HttpException.utils');
const jwt = require ('jsonwebtoken');
const dotenv = require('dotenv');
const adminMockModel = require('../mocks/Adminuser');
dotenv.config();

const auth = ()=>{

    return async function (req,res,next) {

        try {
           
            const authHeader = req.headers.authorization;
            const bearer = 'Bearer ';
            if(!authHeader || !authHeader.startsWith(bearer)){
             
                throw new HttpException(401, 'Access denied. No credentials sent!');
            }
            const token = authHeader.replace(bearer,'');
            const secretKey = process.env.SECRET_KEY || "";
            const decodedValue = jwt.verify(token, secretKey);
            const{
                adminMockModel:{
                    username,
                    password
                }
            } = decodedValue;
            let user;
            (adminMockModel.username === username 
            && adminMockModel.password === password)?  //with mocks to show the operation of the authentication function
            user = {...adminMockModel}:null;
        
            if(user===null){
                throw new HttpException(401,'Authentication failed!');
            }
            req.params.idAdmin = user.id;
            req.currentUser = user;
            next();

        } catch (error) {
            error.status = 401;
            next(error);
        }
        
    }

}

module.exports=auth;