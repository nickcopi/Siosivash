module.exports = class Command{
	constructor(type,recipient,command){
		this.type = type;
		this.recipient = recipient;
		this.command = command;
	}
}
