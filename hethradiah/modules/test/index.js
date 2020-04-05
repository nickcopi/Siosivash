const Module = require('../../utils/Module');
module.exports = class Test extends Module{
	async getCommands(){
		return [
			new this.Command(this.ExecRunner,'dir',10),
			new this.Command(this.SpawnRunner,'ls'),
			new this.Command(this.WhoRunner)
		];
	}
	async reportExec(result,command){
		console.log(result);
	}
	async reportSpawn(result,command){
		console.log(result);
	}
	async reportWho(result,command){
		console.log(result);
	}
	async canConnect(){
		return true;
	}


}
