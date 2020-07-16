const Receiver = require('./Receiver');
const cli = require('./cli');


class Controller{
	constructor(){
		this.receiver = new Receiver();
		this.components = [];
	}
	registerComponent(component){
		component.receiver = this.receiver;
		this.components.push(component);
	}
	receiveResponse(response){
		this.components.forEach(component=>{
			component.notify(response);
		});
	}

}
const controller = new Controller();
controller.registerComponent(cli);
