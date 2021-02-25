const express = require('express');
const db = require('../models');
const router = express.Router();
const Users = requir('../models/users');

router.get('/', async (req, res) =>{
    const users = await Users.getAll();
    res.json(Users);
});

module.exports = router;

/*Registro de usuarios*/
const insert = ({User_Name, User_Email, User_Password}) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users ( User_Name, User_Email, User_Password) VALUES (?, ?, ?, ?)', [User_Name, User_Email, User_Password], 
        (result) => {
            if (err) reject(err)
            if(result){
                resolve(result)
            };
        });
    });
};

/*Obtener usuarios por su Email*/
const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) =>{
        db.query('SELECT * FROM users WHERE User_Email = ?', [pEmail, (err, rows) => {
            if (err) reject (err)
            resolve(rows[0])
        }]);
    });
};


module.exports = {
    getAll: getAll,
    insert: insert,
    getByEmail: getByEmail
}