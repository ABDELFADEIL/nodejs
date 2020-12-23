const express = require('express');
const router = express.Router();
const subject_controller = require('../controllers/subject.controller');

router.get('/',subject_controller.list_subject);
router.get('/:id',subject_controller.detail_subject);
router.post('/',subject_controller.add_subject);
router.put('/:id',subject_controller.edit_subject);
router.delete('/:id',subject_controller.delete_subject);

module.exports = router;