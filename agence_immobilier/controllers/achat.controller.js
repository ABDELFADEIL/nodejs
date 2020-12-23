const Achat = require('../models').Achat;


/**
 *
 * List all achats
 */
exports.list_achat = (req, res, next) =>{
    Achat.findAll({  })
        .then( achats => res.status(200).json(achats))
        .catch( err => console.log(err))
}
/**
 *
 * Detail achat
 */
exports.detail_achat = (req, res, next) =>{
    const id = req.params.id;
    Achat.findByPk(id)
        .then( achat => res.status(200).json(achat))
        .catch( err => console.log(err))
}

/**
 * Add a achat
 */
exports.add_achat = (req, res, next) =>{
    const achat = req.body;
    Achat.create(achat)
        .then( achatCreated => res.status(201).json(achatCreated))
        .catch( err => console.log(err))
}

/**
 * Edit a achat
 */
exports.edit_achat = (req, res, next) =>{
    const id = req.params.id;
    const achat = req.body;
    Achat.update(achat, {
        where:{
            id: id
        }
    })
        .then( achatEdited => res.status(201).json(achatEdited))
        .catch( err => console.log(err))
}

/**
 * Delete a achat
 */
exports.delete_achat = (req, res, next) =>{
    const id = req.params.id;
    Achat.destroy({
        where:{
            id: id
        }
    })
        .then( achatDeleted => res.status(200).json({message:`Achat Deleted ${achatDeleted}`}))
        .catch( err => console.log(err))
}
