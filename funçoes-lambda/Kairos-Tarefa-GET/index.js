'use strict';

const axios = require('axios');

exports.handler = async (event, context, callback) => {
	
	let results = [];
	let errorMessage = null;
	
	await axios.get('https:<firebase-url>/tarefa.json')
		.then(res => {
			const dados = res.data;
			const chaves = Object.keys(dados);
			
			for (let chave in dados) {
				const tarefa = dados[chave];
				
				tarefa.id = chave;
				results.push(tarefa);
			}
		})
		.catch(error => {
			errorMessage = error;
		});
	
	if (!errorMessage) callback(null, results);
	callback(errorMessage);

};