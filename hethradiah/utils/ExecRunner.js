const {exec} = require('child_process');
class ExecRunner{
	constructor(){

	}
	evalCommand(command,communicator){
		new Promise((resolve,reject)=>{
			exec(command.command,{
				timeout:command.timeout*1000,
				windowsHide:true
			},(error,stdout,stderr)=>{
				resolve({
					error,
					stdout,
					stderr,
					id:communicator.id
				});
			});
		}).then(result=>{
			communicator.reportExec(result,command);
		});
	}
}
module.exports = new ExecRunner();
