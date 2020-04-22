const db = require('./config');
const Sequelize = require('sequelize');

const Pokemon = db.define('pokemon', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	height: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	weight: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	experience: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
})

Pokemon.sync();
	

module.exports = {
	Pokemon
}