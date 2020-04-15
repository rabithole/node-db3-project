const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);
// normally place above code in a db-helper file. 

module.exports = {
	find,
	findById,
	findSteps,
};

function find() {
	return db('schemes');
	// console.log({ Yes_find: 'find' })
}

function findById(id) {
	return db('schemes').where({ id }).first();
}

function findSteps(id) {
	console.log({ FindSteps: 'findSteps' })
	return db('schemes')
		.join('steps')
		.select('schemes.id', 'schemes_name', 'steps.instructions', 'steps.step_number')
		// .where({  });
}