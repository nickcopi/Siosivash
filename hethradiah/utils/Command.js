module.exports = class Command{
	constructor(type,command,timeout,recipient){
		this.type = type;
		this.recipient = recipient;
		this.command = command;
		this.timeout = timeout;
	}
}
