module.exports = class Message{
	constructor(type,issuer,timestamp,recipient,id){
		this.type = type;
		this.issuer = issuer;
		this.recipient = recipient;
		this.timestamp = timestamp;
		this.id = id;
	}
	generateId(){
		return (Math.random() * Math.random()).toString().split('.').join('');
	}

}
