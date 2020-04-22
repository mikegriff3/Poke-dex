const Sequelize = require('sequelize');

const db = new Sequelize('postgres://haoboipd:TGcYw2QLUg1-4MSaErOezlJkhMLfO5k4@pellefant.db.elephantsql.com:5432/haoboipd', {
	dialect: 'postgres'
})

console.log('Connected to remote db');

module.exports = db;