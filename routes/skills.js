var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// Get /skills 
router.get('/', skillsCtrl.index);
// Get /skills/new
router.get('/new', skillsCtrl.new);
// Get /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);

module.exports = router;
