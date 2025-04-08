const RootController = require('../controllers/root.controller');

const router = require('express').Router();

router.get('/', RootController.getRoot);

module.exports = router;
