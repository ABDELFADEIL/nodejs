// Import Model
const Student = require('../models').Student;

/**
 * 
 * List all students
 */
exports.list_student = (req, res, next) =>{
  Student.findAll({})
  .then( students => res.status(200).json(students))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail student
 */
exports.detail_student = (req, res, next) =>{
  const id = req.params.id;
  Student.findByPk(id)
  .then( student => res.status(200).json(student))
  .catch( err => console.log(err))
}

/**
 * Add a student
 */
exports.add_student = (req, res, next) =>{
  const student = req.body;
  Student.create(student)
  .then( studentCreated => res.status(201).json(studentCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a student
 */
exports.edit_student = (req, res, next) =>{
  const id = req.params.id;
  const student = req.body;
  Student.update(student, {
    where:{
      id: id
    }
  })
  .then( studentEdited => res.status(201).json(studentEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a student
 */
exports.delete_student = (req, res, next) =>{
  const id = req.params.id;
  Student.destroy({
    where:{
      id: id
    }
  })
  .then( studentDeleted => res.status(200).json({message:`Student Deleted ${studentDeleted}`}))
  .catch( err => console.log(err))
}