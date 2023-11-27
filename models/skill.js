const skills = [
{id: 123, skill: 'JavaScript', done: true},
{id: 456, skill: 'HTML', done: true},
{id: 789, skill: 'CSS', done: true},
{id: 101112, skill: 'Node JS', done: false},
{id: 131415, skill: 'Mongo DB', done: false}
];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  } 