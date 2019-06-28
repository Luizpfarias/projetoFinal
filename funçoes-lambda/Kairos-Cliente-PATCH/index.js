'use strict';

const axios = require('axios');
const uniqid = require('uniqid');

exports.handler = async (event, context, callback) => {
	
	let errorMessage = null;
	
	await axios.patch(`https:<firebase-url>/cliente/${event.id}.json`, event)
		.then(res => {
            
		})
		.catch(getError => {
			errorMessage = getError;
		})
	
	if (!errorMessage) callback();
	callback(errorMessage);

};