const Module = require('../../utils/Module');
const axios = require('axios');
const endpoint = 'https://script.google.com/macros/s/AKfycbzSWpfyt_0lHRRoI5D0kHDaB34bVS-55gUQK7UeClxrWzBa6wI/exec';
module.exports = class Test extends Module{
	async getCommands(){
		const listing = await axios.get(endpoint,{
			params:{
				mode:'getCommands'
			}
		});
		return listing.data.result.map(command=>{
			command = JSON.parse(command);
			return new this.Command(this.types[command.type],command.issuer,command.command,command.timeout,command.destination);
		});
	}
	async report(body){
		console.log(body);
	}
	async canConnect(){
		return true;
	}
	async 


}
