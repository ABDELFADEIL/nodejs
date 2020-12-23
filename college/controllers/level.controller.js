// Import Model
const Level = require('../models').Level;

/**
 * 
 * List all levels
 */
exports.list_level = (req, res, next) =>{
  Level.findAll({})
  .then( levels => res.status(200).json(levels))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail level
 */
exports.detail_level = (req, res, next) =>{
  const id = req.params.id;
  Level.findByPk(id)
  .then( level => res.status(200).json(level))
  .catch( err => console.log(err))
}

/**
 * Add a level
 */
exports.add_level = (req, res, next) =>{
  const level = req.body;
  Level.create(level)
  .then( levelCreated => res.status(201).json(levelCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a level
 */
exports.edit_level = (req, res, next) =>{
  const id = req.params.id;
  const level = req.body;
  Level.update(level, {
    where:{
      id: id
    }
  })
  .then( levelEdited => res.status(201).json(levelEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a level
 */
exports.delete_level = (req, res, next) =>{
  const id = req.params.id;
  Level.destroy({
    where:{
      id: id
    }
  })
  .then( levelDeleted => res.status(200).json({message:`Level Deleted ${levelDeleted}`}))
  .catch( err => console.log(err))
}