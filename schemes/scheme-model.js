const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);
// normally place above code in a db-helper file. 

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove,
};

function find() {
	return db('schemes');
	// console.log({ Yes_find: 'find' })
}

function findById(id) {
	return db('schemes').where({ id }).first();
}

function findSteps(id) {
	return db('schemes')
		.join('steps')
		.select('schemes.id as schemesId', 'schemes.scheme_name', 'steps.step_number', 'steps.step_number', 'steps.instructions' )
		.where({ schemesId: id });
}

function add(scheme) {
	return db('schemes')
		.insert(scheme)
}

function update(changes, id) {
	console.log('update')
	return db('schemes')
		.where({ id })
		.update(changes)
}

function remove(id) {
	return db('schemes')
		.where('id', id)
		.del();
}