const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.home);
router.get('/show-details', controller.showDetails);
router.get('/episodes', controller.episodes);

module.exports = router;
