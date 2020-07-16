const axios = require('axios');
const Module = require('../../aameul/utils/Module');
const endpoint = 'https://script.google.com/macros/s/AKfycbzSWpfyt_0lHRRoI5D0kHDaB34bVS-55gUQK7UeClxrWzBa6wI/exec';
module.exports = class GoogleSheet extends Module{
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
	async getResponses(){
		const raw = await this.readRaw();
		const messages = raw.result.map(message=>JSON.parse(message));
		const responses = messages.filter(message=>{
			return message.type === this.MessageTypes.RESPONSE_TYPE;
		});
		return responses;
	}
	async sendCommand(command){
		return await this.writeRaw(JSON.stringify(command));
	}
	async canConnect(){
		return true;
	}
}
