const errorMiddleware=(error,req,res,next)=>{
    let {
        status,
        message,
        data
    } = error;

     message = (status === 500 || !message )? 'Internal server error' : message;

     error = {
         type:'error',
         status,
         message,
         ...data && data
     }

     res.status(status).send(error);

}
module.exports=errorMiddleware;