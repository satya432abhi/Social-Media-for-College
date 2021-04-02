const express =  require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');
router.get('/profile',passport.checkAuthentication,usersController.profile);

const contact = require('../controllers/users_controller');
router.get('/Contact',usersController.Contact);

router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

//dont use a get request here, as we have declared the method as POST 
router.post('/create',usersController.create);
//use passport as a middleware to authenticate 
router.post('/create-session',passport.authenticate(
    'local',
    { failureRedirect:'/users/sign-in'},
) ,usersController.createSession);

router.get('/sign-out',usersController.destroySession);
module.exports = router;