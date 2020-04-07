const Module = require('../../utils/Module');
module.exports = class Test extends Module{
	async getCommands(){
		return [
			new this.Command(this.ExecRunner,1234,'dir',10),
			new this.Command(this.SpawnRunner,1234,'ls'),
			new this.Command(this.WhoRunner,1234)
		];
	}
	async canConnect(){
		return true;
	}
	async 


}
