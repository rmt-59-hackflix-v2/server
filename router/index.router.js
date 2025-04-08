const RootController = require('../controllers/root.controller');

const router = require('express').Router();

router.get('/', RootController.getRoot);

router.use('/auth', require('./auth.router'));

module.exports = router;
