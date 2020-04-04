module.exports = class Command{
	constructor(type,command,recipient){
		this.type = type;
		this.recipient = recipient;
		this.command = command;
	}
}
