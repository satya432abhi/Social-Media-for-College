const express =  require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
router.get('/profile',usersController.profile);

const contact = require('../controllers/users_controller');
router.get('/Contact',usersController.Contact);

router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

//dont use a get request here, as we have declared the method as POST 
router.post('/create',usersController.create);

module.exports = router;