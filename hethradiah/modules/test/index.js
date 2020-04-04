const Command = require('../../utils/Command.js');
module.exports = class Test{
	constructor(){

	}
	async getCommands(){
		return [
			new Command('exec','dir'),
			new Command('exec','tree')
		];
	}

}
