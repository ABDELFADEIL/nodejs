const Achteur = require('../models').Achteur;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



/**
 *
 * achteur register
 */

exports.achteur_register = (req, res, next) => {
    bcrypt.hash(req.body.pwd, 10, (err, hash) => {
        if(err) {
            throw err
        }
        let achteur = req.body;
        achteur.pwd = hash;
        Achteur.create(achteur)
            .then( data => res.status(201).json(data))
            .catch(error => console.log(error))
    })
}

/**
 *
 * achteur login
 */
exports.achteur_login = (req, res, next) => {
    Achteur.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(achteur => {
            if (achteur){
        bcrypt.compare(req.body.pwd, achteur.pwd, (err, result)=> {
            if(err) res.status(500).json(err)
            else  {
                if (result){
                    const token = jwt.sign({email: achteur.email, firstname: achteur.firstname, lastname: achteur.lastname}, process.env.SECRET_PHRASE, {expiresIn:'24h'})
                    res.status(200).json({token:token});
                }else {
                    res.status(500).json({message: 'You fail'})
                }
            }
        })
            }else {
                res.status(404).json({message: 'Bad login / pwd'})
            }
        })
        .catch(err=> res.status(500).json(err))
}

/**
 *
 * achteur register
 */

exports.achteur_list = (req,res, next) =>{
    Achteur.findAll({})
        .then( achteurs => res.status(200).json(achteurs))
        .catch(err => console.log(err))
}



/**
 * Edit a achteur
 */
exports.edit_achteur = (req, res, next) =>{
    const id = req.params.id;
    const achteur = req.body;
    Achteur.update(achteur, {
        where:{
            id: id
        }
    })
        .then( achteurEdited => res.status(201).json(achteurEdited))
        .catch( err => console.log(err))
}

/**
 * Delete a achteur
 */
exports.delete_achteur = (req, res, next) =>{
    const id = req.params.id;
    Achteur.destroy({
        where:{
            id: id
        }
    })
        .then( achteurDeleted => res.status(200).json({message:`Achteur Deleted ${achteurDeleted}`}))
        .catch( err => console.log(err))
}
