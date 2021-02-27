const query = require('../db/db-connection');
const multipleColumnSet = require('../utils/common.utils');

class DoctorModel {

    tableName = 'Doctors'
    create = async (name,surname) => {

        const sqlQuery = `INSERT INTO ${this.tableName} (name , surname) VALUES (?,?)`;
        const result = await query(sqlQuery,[name,surname]);
        const rows = result?result.affectedRows :0;
        return rows;
    }
    
    find = async (params={}) =>{

        let sqlQuery = `SELECT * from ${this.tableName}`;
        if(!Object.keys(params).length){
            return await query(sqlQuery);
        }
        const {columnSet,values} = multipleColumnSet(params);
        sqlQuery+=` WHERE ${columnSet}`

        return await query(sqlQuery,[...values])
        
     }

     findOne=async(params)=>{

        const {columnSet,values} = multipleColumnSet(params);
        const sqlQuery = `SELECT * FROM ${this.tableName} WHERE ${columnSet}`;
        const result = await query(sqlQuery,[...values]);
        return result.length>0?result[0]:null;

    }
    
    
    






}
module.exports = new DoctorModel;