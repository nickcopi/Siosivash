const axios = require('axios');
const Module = require('../../aameul/utils/Module');
const endpoint = 'https://script.google.com/macros/s/AKfycbw3jnX-O9TKh333OH-tvipPHl3diSe_v66q88EEikGu2MQovnYs1a66XcVDywbk1mit/exec';
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
