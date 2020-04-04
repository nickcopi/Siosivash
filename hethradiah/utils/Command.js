module.exports = class Command{
	constructor(type,command,timeout,recipient){
		this.type = type;
		this.recipient = recipient;
		this.timeout = timeout;
		this.command = command;
	}
}
