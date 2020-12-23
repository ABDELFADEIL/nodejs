
const Gift = require('../models').Gift;
const Human = require('../models').Human;
const Locomotion = require('../models').Locomotion;


exports.list_locomotion = (req, res, next) =>{
    Locomotion.findAll({
        include:[
            {
                model: Human,
                attributes: ['id', 'name', 'age', 'email']
            }
        ]
    })
        .then( locomotions => res.status(200).json(locomotions))
        .catch( err => console.log(err))
}
/**
 *
 * Detail locomotion
 */
exports.detail_locomotion = (req, res, next) =>{
    const id = req.params.id;
    Gift.findByPk(id)
        .then( locomotion => res.status(200).json(locomotion))
        .catch( err => console.log(err))
}

/**
 * Add a locomotion
 */
exports.add_locomotion = (req, res, next) =>{
    const locomotion = req.body;
    Gift.create(locomotion)
        .then( locomotionCreated => res.status(201).json(locomotionCreated))
        .catch( err => console.log(err))
}

/**
 * Edit a locomotion
 */
exports.edit_locomotion = (req, res, next) =>{
    const id = req.params.id;
    const locomotion = req.body;
    Gift.update(locomotion, {
        where:{
            id: id
        }
    })
        .then( locomotionEdited => res.status(201).json(locomotionEdited))
        .catch( err => console.log(err))
}

/**
 * Delete a locomotion
 */
exports.delete_locomotion = (req, res, next) =>{
    const id = req.params.id;
    Locomotion.destroy({
        where:{
            id: id
        }
    })
        .then( locomotionDeleted => res.status(200).json({message:`Locomotion Deleted ${locomotionDeleted}`}))
        .catch( err => console.log(err))
}
