const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router is loaded');

router.get('/', homeController.home);
router.use('/users',require('./users'));
//for any further routes,accesss from here
// router.use('/routerName',require('./routerfile'));


module.exports= router;
