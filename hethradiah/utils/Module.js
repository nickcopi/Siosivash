module.exports = class Module{
	constructor(id){
		this.Command = require('./Command');
		this.ExecRunner = require('./ExecRunner');
		this.SpawnRunner = require('./SpawnRunner');
		this.WhoRunner = require('./WhoRunner');
		this.types = {
			exec:this.ExecRunner
		}
		this.id = id;
	}
	async reportExec(result,command){
		return await this.report(JSON.stringify({
			issuer:command.issuer,
			type:"exec",
			result
		}));
	}
	async reportSpawn(result,command){
		console.log(result);
	}
	async reportWho(result,command){
		console.log(result);
	}
}
