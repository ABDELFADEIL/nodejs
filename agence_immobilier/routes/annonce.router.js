const auth = require('../middlewares/auth');
const express = require('express');
const router = express.Router();
const annonce_controller = require('../controllers/annonce.controller');

router.get('/', auth(),annonce_controller.list_annonce);
router.get('/:id', auth(),annonce_controller.detail_annonce);
router.post('/', auth(),annonce_controller.add_annonce);
router.put('/:id', auth(),annonce_controller.edit_annonce);
router.delete('/:id', auth(),annonce_controller.delete_annonce);

module.exports = router;
