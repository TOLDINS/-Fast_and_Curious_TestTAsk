module.exports = (object) =>{

    if(typeof object!=='object'){

         throw new Error('Invalid Input')
        
    }

    const keys = Object.keys(object);
    const values = Object.values(object);
    const columnSet = keys.map (key=>`${key} = ?`).join(' AND ');
    return {
        columnSet,
        values
    }

}