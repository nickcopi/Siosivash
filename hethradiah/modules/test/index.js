const Command = require('../../utils/Command.js');
const ExecRunner = require('../../utils/ExecRunner.js');
module.exports = class Test{
	constructor(){

	}
	async getCommands(){
		return [
			new Command(ExecRunner,'dir',10),
			new Command(ExecRunner,'tree',10)
		];
	}

}
