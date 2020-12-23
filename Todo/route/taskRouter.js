const express = require('express');
const router = express.Router();

const taskController = require('../controller/taskController.js')
router.get('/', taskController.tasksList);
router.get('/:id', taskController.detail_task);
router.post('/', taskController.add_task);
router.patch('/', taskController.update_task);
router.delete('/:id', taskController.remove_task);

module.exports = router;