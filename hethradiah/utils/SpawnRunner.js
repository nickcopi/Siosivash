const {spawn} = require('child_process');
class SpawnRunner{
	constructor(){

	}
	evalCommand(command,communicator){
		try{
			spawn(command.command,{
				shell:true,
				detatched:true,
				windowsHide:true
			});
			communicator.reportSpawn("",command);
		} catch(e){
			communicator.reportSpawn(e,command);
		}
	}
}
module.exports = new SpawnRunner();
