module.exports = class Module{
	constructor(id){
		this.Command = require('../../shared/Command');
		this.Response = require('../../shared/Response');
		this.MessageTypes = require('../../shared/MessageTypes');
		this.ExecRunner = require('./ExecRunner');
		this.SpawnRunner = require('./SpawnRunner');
		this.WhoRunner = require('./WhoRunner');
		this.types = {
			exec:this.ExecRunner,
			spawn: this.SpawnRunner,
			who: this.WhoRunner
		}
		this.id = id;
	}
	async getCommands(){

	}
	async reportExec(result,command){
		return await this.report({
			command,
			result
		});
	}
	async reportSpawn(result,command){
		return await this.report({
			command,
			result
		});
	}
	async reportWho(result,command){
		return await this.report({
			command,
			result
		});
	}
}
