module.exports = class Command{
	constructor(type,issuer,command,timeout,recipient){
		this.type = type;
		this.issuer = issuer;
		this.recipient = recipient;
		this.command = command;
		this.timeout = timeout;
	}
}
