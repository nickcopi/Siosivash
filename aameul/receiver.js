const config = require('./config.json');
const Communicator = require('../modules/googlesheet/aameul');
module.exports = class Receiver{
	constructor(){
		this.oldResponses = [];
		this.id = this.generateId();
		this.communicator = new Communicator(this.id);
		//verify canConnect
		this.interval = setInterval(()=>{
			try{
				this.handlePoll()
			} catch(e){
				console.error(e);
			}
		},config.pollDelay*1000);
		this.handlePoll();
		console.log(this.id);
	}
	generateId(){
		return (Math.random() * Math.random()).toString().split('.').join('');
	}
	async handlePoll(){
		const responses = await this.communicator.getResponses();
		if(!this.runOnce){
			this.runOnce = true;
			this.oldResponses = responses.map(response=>response.id);
			return;
		}
		responses.forEach(response=>{
			if(this.oldResponses.includes(response.id)) return;
			this.oldResponses.push(response.id);
			if(response.recipient && !response.recipient.includes(this.id)) return;
			console.log(response);
		});

	}
}
