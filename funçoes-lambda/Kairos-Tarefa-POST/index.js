'use strict';

const axios = require('axios');

exports.handler = async (event, context, callback) => {
	
	let errorMessage = null;

	await axios.post('https:<firebase-url>/tarefa.json', event)
		.then(res => {
			console.log(res);
		})
		.catch(error => {
			errorMessage = error;
		});
	
	if (errorMessage) callback(errorMessage);
	callback();

};