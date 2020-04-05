const {spawn} = require('child_process');
class WhoRunner{
	constructor(){

	}
	evalCommand(command,communicator){
		communicator.reportWho({ 
			platform: process.platform,
			id:communicator.id
		},command);
	}
}
module.exports = new WhoRunner();
