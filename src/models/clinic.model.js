const query = require('../db/db-connection');
const  multipleColumnSet = require('../utils/common.utils');

class ClinicModel {

    tableName = 'Clinics'

    create = async (name) => {

        const sqlQuery = `INSERT INTO ${this.tableName}(name) VALUES (?)`;
        const result = await query(sqlQuery,[name]);
        const rows = result?result.affectedRows :0;
        return rows;
    }
    find = async (params = {}) => {

        const sqlQuery = `SELECT * FROM ${this.tableName}`;
        if(!Object.keys(params).length){
            return await query(sqlQuery);
        }
        const {columnSet,values} = multipleColumnSet(params);
        sqlQuery+=`WHERE ${columnSet}`

        return await query(sqlQuery,[...values]);

    }
    findOne = async (params) =>{

        const {columnSet,values} = multipleColumnSet(params);
        const sqlQuery = `SELECT * FROM ${this.tableName} WHERE ${columnSet}`;
        const result = await query(sqlQuery,[...values]);
        return result[0];

    }
    remove = async (params) =>{

        const {columnSet,values} = multipleColumnSet(params);
        const sqlQuery = `DELETE FROM ${this.tableName} WHERE ${columnSet}`;

        const result = await query(sqlQuery,[...values]);
        return result.affectedRows;

    }
    





}

module.exports=  new ClinicModel;