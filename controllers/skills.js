const Skill = require('../models/skill');

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Skills'
    });
  }

  function show(req, res){
    res.render('skills/show', {
      todo: Todo.getOne(req.params.id),
      title: 'Skills Details'
    });
  }