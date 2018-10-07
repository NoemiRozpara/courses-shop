function StateStore (){
	var self = this

	this.state = {}

	this.dispatchEvents = () => {
		this.callback(this.state)
	}

	this.callback = (state) => {
		for(let callback of this.callbacks){
			callback(this.state)
		}
	}

	this.callbacks = [];

	this.addListener = (callback) => {
		this.callbacks.push(callback)
	}

	this.createAction = function(handler) {
		var state = this.state;

		return function() {
			handler.apply(state, arguments);
			self.dispatchEvents();
		}
	}

	this.createActions = function(handlersMap){
		var actions = {}

		for(let name in handlersMap){
			actions[name] = this.createAction(handlersMap[name])
		}
		return actions;
	} 
}

export default StateStore;