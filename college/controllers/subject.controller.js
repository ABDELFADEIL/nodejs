// Import Model
const Subject = require('../models').Subject;

/**
 * 
 * List all subjects
 */
exports.list_subject = (req, res, next) =>{
  Subject.findAll({})
  .then( subjects => res.status(200).json(subjects))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail subject
 */
exports.detail_subject = (req, res, next) =>{
  const id = req.params.id;
  Subject.findByPk(id)
  .then( subject => res.status(200).json(subject))
  .catch( err => console.log(err))
}

/**
 * Add a subject
 */
exports.add_subject = (req, res, next) =>{
  const subject = req.body;
  Subject.create(subject)
  .then( subjectCreated => res.status(201).json(subjectCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a subject
 */
exports.edit_subject = (req, res, next) =>{
  const id = req.params.id;
  const subject = req.body;
  Subject.update(subject, {
    where:{
      id: id
    }
  })
  .then( subjectEdited => res.status(201).json(subjectEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a subject
 */
exports.delete_subject = (req, res, next) =>{
  const id = req.params.id;
  Subject.destroy({
    where:{
      id: id
    }
  })
  .then( subjectDeleted => res.status(200).json({message:`Subject Deleted ${subjectDeleted}`}))
  .catch( err => console.log(err))
}