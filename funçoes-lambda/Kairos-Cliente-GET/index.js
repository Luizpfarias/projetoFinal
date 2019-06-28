'use strict';

const axios = require('axios');
const uniqid = require('uniqid');

exports.handler = async (event, context, callback) => {
	
	let errorMessage = null;
	let results = {};
	
	await axios.get(`https:<firebase-url>/cliente/${event.id}.json`)
		.then(res => {
            results = {...res.data};
		})
		.catch(getError => {
			errorMessage = getError;
		})
	
	if (!errorMessage) callback(null, results);
	callback(errorMessage);

};