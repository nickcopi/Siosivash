const Module = require('../../hethradiah/utils/Module');
const axios = require('axios');
const endpoint = 'https://script.google.com/macros/s/AKfycbzSWpfyt_0lHRRoI5D0kHDaB34bVS-55gUQK7UeClxrWzBa6wI/exec';
module.exports = class GoogleSheet extends Module{
	/*
	 * Helper method that gets raw, unparsed output from the endpoint
	 * */
	async readRaw(){
		return (await axios.get(endpoint).catch(e=>console.error(e))).data;
	}
	async writeRaw(message){
		return (await axios.get(endpoint,{
			params:{
				message
			}
		}).catch(e=>console.error(e))).data;
	}
	async getCommands(){
		const raw = await this.readRaw();
		const messages = raw.result.map(message=>JSON.parse(message));
		const commands = messages.filter(message=>{
			return message.type === this.MessageTypes.COMMAND_TYPE
		});
		return commands.map(command=>{
			command = Object.assign(new this.Command,command)
			command.perform = this.types[command.commandType];
			return command;
		});

	}
	async report(body){
		//constructor(output,issuer,timestamp,recipient,id){
		const response = new this.Response(body.result,body.command.recipient,Date.now(),body.command.issuer,body.command.id);
		console.log(response);
		this.writeRaw(JSON.stringify(response))
	}
	async canConnect(){
		return true;
	}

}
