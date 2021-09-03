const { response } = require('express');
const getDB = require('../services/db')



exports.create = async (request, response) => {
    const db = await getDB();
    const { name, genre } = request.body;
    try {
    await db.query (`INSERT INTO Artist (name,genre) 
    VALUES(? , ?)`, [
        name,
        genre
    ]);
    response.sendStatus(201)}
   
    catch (err) {
       response.sendStatus(500).json(err)
    }


    db.close()
}


exports.read = async(request, response) => {
    const db = await getDB();
    
    try {
        await db.query(`SELECT * from Artist` , )
    response.sendStatus(200)}
    
catch (err) {
    response.sendStatus(500).json(err)

}
db.close()
}