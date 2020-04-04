const Command = require('./utils/Command');
const config = require('./config.json');
const Communicator = require('./modules/test');


class Controller{
	constructor(){
		this.communicator = new Communicator();
		this.id = this.generateId();
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
			console.log(command);
		
		});

	}
}

const controller = new Controller();
