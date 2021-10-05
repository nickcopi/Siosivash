const Receiver = require('./receiver');
const config = require('./config.json');
const selectedComponent = require(`./modules/${config.module}/`);


class Controller{
	constructor(){
		this.receiver = new Receiver(this.receiveResponse.bind(this));
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
controller.registerComponent(selectedComponent);
