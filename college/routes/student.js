const express = require('express');
const router = express.Router();
const student_controller = require('../controllers/student.controller');

router.get('/',student_controller.list_student);
router.get('/:id',student_controller.detail_student);
router.post('/',student_controller.add_student);
router.put('/:id',student_controller.edit_student);
router.delete('/:id',student_controller.delete_student);

module.exports = router;