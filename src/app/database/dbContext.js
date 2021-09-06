const knex = require('knex');
const knexConfig = require('../../../knexfile');

const dbContext = knex(knexConfig);

module.exports = dbContext;