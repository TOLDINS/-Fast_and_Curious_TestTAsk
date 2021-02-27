const query = require('../db/db-connection');
const multipleColumnSet = require('../utils/common.utils');

class MiddleReference {

    tableName ='MiddleReference'

    find = async (params)=>{

        let sqlQuery = `SELECT * FROM ${this.tableName}`; 
        if(!Object.keys(params).length){

            return await query(sqlQuery);
        }
        const {columnSet,values} = multipleColumnSet(params);
        sqlQuery+=` WHERE ${columnSet}`;
        return await query(sqlQuery,[...values]);
    }

    create = async (createData) =>{
        const{
            id_clinics,
            id_doctor,
            id_service
        } = createData;
       const sqlQuery = `INSERT INTO ${this.tableName} (id_clinics , id_doctor , id_service) VALUES (?, ?, ?)`;
       const result = await query(sqlQuery,[id_clinics,id_doctor,id_service]);
       return result;

    }





}


module.exports = new MiddleReference;