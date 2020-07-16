const prompt = require('prompt');
const Component = require('./utils/Component');

class Cli extends Component{
	constructor(){
		super();
		prompt.start();
		prompt.message = '';
		prompt.delimiter = '';
		this.defaultOptions = {
			name: 'action',
			description: 'Enter an action',
			type:'string',
			required:true,
			message:'Stay actionfuL!',
			conform:(action)=>{
				//console.log(action);
				return true;//actions.includes(action);
			}

		}
		this.doLoop();

	}
	async doLoop(){
		await this.getInput(this.defaultOptions);
	}
	async getInput(options){
			prompt.get(options,()=>{});
	}
	notify(){

	}

}

module.exports =  new Cli();
