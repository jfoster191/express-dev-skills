const skills = [
{id: 123, skill: 'JavaScript', done: true},
{id: 456, skill: 'HTML', done: true},
{id: 789, skill: 'CSS', done: true},
{id: 101112, skill: 'Node JS', done: false},
{id: 131415, skill: 'Mongo DB', done: false}
];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  } 

  function create(skill){
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }