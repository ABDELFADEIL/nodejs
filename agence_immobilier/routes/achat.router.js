const express = require('express');
const router = express.Router();
const achat_controller = require('../controllers/achat.controller');

router.get('/',achat_controller.list_achat);
router.get('/:id',achat_controller.detail_achat);
router.post('/',achat_controller.add_achat);
router.put('/:id',achat_controller.edit_achat);
router.delete('/:id',achat_controller.delete_achat);

module.exports = router;
