const {exec} = require('child_process');
class ExecRunner{
	constructor(){

	}
	evalCommand(command,communicator){
		new Promise((resolve,reject)=>{
			exec(command.command,{
				timeout:command.timeout*1000,
				windowsHide:true
			},(...output)=>{
				resolve(output);
			});
		}).then(result=>{
			console.log(result);
		});
	}
}
module.exports = new ExecRunner();
