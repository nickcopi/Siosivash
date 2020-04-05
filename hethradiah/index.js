const Command = require('./utils/Command');
const config = require('./config.json');
const Communicator = require('./modules/test');


class Controller{
	constructor(){
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
	}
	generateId(){
		return (Math.random() * Math.random()).toString().split('.').join('');
	}
	async handlePoll(){
		const commands = await this.communicator.getCommands();
		commands.forEach(command=>{
			if(command.recipient && !command.recipient.includes(this.id)) return;
			command.type.evalCommand(command,this.communicator);
		});

	}
}

const controller = new Controller();
