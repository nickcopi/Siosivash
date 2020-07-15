const config = require('./config.json');
const Communicator = require('../modules/googlesheet/hethradiah.js');


class Controller{
	constructor(){
		this.oldCommands = [];
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
	}
	generateId(){
		return (Math.random() * Math.random()).toString().split('.').join('');
	}
	async handlePoll(){
		const commands = await this.communicator.getCommands();
		if(!this.runOnce){
			this.runOnce = true;
			this.oldCommands = commands.map(command=>command.id);
			return;
		}
		commands.forEach(command=>{
			if(this.oldCommands.includes(command.id)) return;
			this.oldCommands.push(command.id);
			if(command.recipient && !command.recipient.includes(this.id)) return;
			command.perform.evalCommand(command,this.communicator);
		});

	}
}

const controller = new Controller();
