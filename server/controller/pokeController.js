const db = require('../db');
const axios = require('axios');

module.exports = {
	fetchPoke: (req, res) => {
		db.Pokemon.findAll({})
			.then(data => {
				res.status(200).send(data);
				console.log('Successfully fetched pokemon');
			})
			.catch(err => {
				res.status(500).send(err);
				console.log('Error fetching pokemon ', err);
			})
	},
	createPoke: (req, res) => {
		for (let i = 1; i < 151; i++){
			axios.get(`http://pokeapi.co/api/v2/pokemon/${i}`)
				.then(data => {
					console.log(data.data.name);
				})
		}
	}
}