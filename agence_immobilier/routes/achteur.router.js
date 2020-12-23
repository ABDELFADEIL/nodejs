const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const achteur_controller = require('../controllers/achteur.controller');


router.get('/', auth(), achteur_controller.achteur_list);
router.post('/register', achteur_controller.achteur_register);
router.post('/login', achteur_controller.achteur_login);
router.put('/:id',achteur_controller.edit_achteur);
router.delete('/:id',achteur_controller.delete_achteur);


module.exports = router;
