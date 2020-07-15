const Message = require('./Message');
const MessageTypes = require('./MessageTypes');
module.exports = class Command extends Message{
	constructor(commandType,issuer,command,timestamp,recipient,timeout){
		super(MessageTypes.COMMAND_TYPE,issuer,timestamp,recipient);
		this.command = command;
		this.commandType = commandType;
		this.timeout = timeout;
	}
}
