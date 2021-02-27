const dotenv = require('dotenv');
dotenv.config();
const mysql2 = require('mysql2');
const db = mysql2.createConnection({

    host:process.env.HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME

});

class DBConnection {
     
   
    async query(sql,values){


        return new Promise ((resolve,reject)=>{

                db.execute(sql,values,(error,result)=>{

                    if(error){
                        reject(error)
                    }
                    resolve(result)


                })


        })

    }
}


module.exports = new DBConnection().query;