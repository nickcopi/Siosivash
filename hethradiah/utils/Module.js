module.exports = class Module{
	constructor(id){
		this.Command = require('./Command');
		this.ExecRunner = require('./ExecRunner');
		this.SpawnRunner = require('./SpawnRunner');
		this.WhoRunner = require('./WhoRunner');
		this.id = id;
	}
}
