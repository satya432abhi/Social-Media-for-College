const express =  require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
router.get('/profile',usersController.profile);

const contact = require('../controllers/users_controller');
router.get('/Contact',usersController.Contact);

module.exports = router;