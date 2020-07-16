module.exports = class Module{
	constructor(id){
		this.Command = require('../../shared/Command');
		this.Response = require('../../shared/Response');
		this.MessageTypes = require('../../shared/MessageTypes');
		this.id = id;
	}
	async getResponses(){

	}
}
