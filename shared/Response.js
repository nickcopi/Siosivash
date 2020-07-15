const Message = require('./Message');
const MessageTypes = require('./MessageTypes');
module.exports = class Response extends Message{
	constructor(output,issuer,timestamp,recipient,id){
		super(MessageTypes.RESPONSE_TYPE,issuer,timestamp,recipient,id);
		this.output = output;
	}
}
