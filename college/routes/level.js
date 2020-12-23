const express = require('express');
const router = express.Router();
const level_controller = require('../controllers/level.controller');

router.get('/',level_controller.list_level);
router.get('/:id',level_controller.detail_level);
router.post('/',level_controller.add_level);
router.put('/:id',level_controller.edit_level);
router.delete('/:id',level_controller.delete_level);

module.exports = router;