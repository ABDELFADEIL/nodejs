const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const agent_controller = require('../controllers/agent.controller');


router.get('/', auth(), agent_controller.agent_list);
router.post('/register', agent_controller.agent_register);
router.post('/login', agent_controller.agent_login);
router.put('/:id',agent_controller.edit_agent);
router.delete('/:id',agent_controller.delete_agent);


module.exports = router;
