// Import Model
const Style = require('../models').Style;


/**
 *
 * List all styles
 */
exports.style_list = (req, res, next) =>{
    Style.findAll({ })
        .then( styles => res.status(200).json(styles))
        .catch( err => console.log(err))
}
/**
 *
 * Detail style
 */
exports.detail_style = (req, res, next) =>{
    const id = req.params.id;
    Style.findByPk(id)
        .then( style => res.status(200).json(style))
        .catch( err => console.log(err))
}

/**
 * Add a style
 */
exports.add_style = (req, res, next) =>{
    const style = req.body;
    Style.create(style)
        .then( styleCreated => res.status(201).json(styleCreated))
        .catch( err => console.log(err))
}

/**
 * Edit a style
 */
exports.edit_style = (req, res, next) =>{
    const id = req.params.id;
    const style = req.body;
    Style.update(style, {
        where:{
            id: id
        }
    })
        .then( styleEdited => res.status(201).json(styleEdited))
        .catch( err => console.log(err))
}

/**
 * Delete a style
 */
exports.delete_style = (req, res, next) =>{
    const id = req.params.id;
    Style.destroy({
        where:{
            id: id
        }
    })
        .then( styleDeleted => res.status(200).json({message:`Style Deleted ${styleDeleted}`}))
        .catch( err => console.log(err))
}
