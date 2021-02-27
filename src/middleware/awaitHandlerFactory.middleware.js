 const awaitHandlerFactory = (middleware)=> {

    return async (req,res,next) =>{

        try {

            await middleware(req,res,next);
            
        } catch (error) {

            console.log(error);
            
            next(error);
        }

    }

}

module.exports = awaitHandlerFactory;

