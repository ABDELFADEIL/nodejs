// Import Model
const Note = require('../models').Note;
const Student = require('../models').Student;
const Subject = require('../models').Subject;

const sequelize = require('sequelize')


/**
 * 
 * List all notes
 */
exports.list_note = (req, res, next) =>{
  Note.findAll({
    attributes:['note','date',
      [sequelize.col('Student.firstName'), 'firstName'],
      [sequelize.col('Student.lastName'), 'lastName'],
      [sequelize.fn('CONCAT', sequelize.literal('Student.firstName'), ' ', sequelize.literal('Student.lastNAme')), 'fullName'],
      [sequelize.col('Subject.name'), 'subject']
    ],
    include:[{
      model: Student,
      attributes: []
    },
    {
      model: Subject,
      attributes: []
    }
    ]
  })
  .then( notes => res.status(200).json(notes))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail note
 */
exports.detail_note = (req, res, next) =>{
  const id = req.params.id;
  Note.findByPk(id)
  .then( note => res.status(200).json(note))
  .catch( err => console.log(err))
}

/**
 * Add a note
 */
exports.add_note = (req, res, next) =>{
  const note = req.body;
  Note.create(note)
  .then( noteCreated => res.status(201).json(noteCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a note
 */
exports.edit_note = (req, res, next) =>{
  const id = req.params.id;
  const note = req.body;
  Note.update(note, {
    where:{
      id: id
    }
  })
  .then( noteEdited => res.status(201).json(noteEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a note
 */
exports.delete_note = (req, res, next) =>{
  const id = req.params.id;
  Note.destroy({
    where:{
      id: id
    }
  })
  .then( noteDeleted => res.status(200).json({message:`Note Deleted ${noteDeleted}`}))
  .catch( err => console.log(err))
}


/*
*
* average note
 */

exports.average_notes = (req, res, next) => {
 noteService.average()
     .then(data => res.status(200).json({average: data}))
     .catch(err => console.log(err));
}