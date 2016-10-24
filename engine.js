console.log('Engine connected');

(function(){
// Incremental gaming engine

// Create new instance of the game

//TODO:
//1) add/remove resource pools.
// 2) raise/lower increments
// 3) able to create "resources" that use other single, and multiple resources ( buildings use wood ect. )
// 4) set custom "tick" time and process all the ups and downs required.
// 5) manage multiple queues/pools ( maybe just a new instance or something? )
// 6) able to retrieve all the data about the pools ( total, increment, ect )



//Create Game Instance
window.IncrementalEngine = function IncrementalEngine() {

	this.gameInterval = null;
	this.gameTick = 0;
	this.resources = {};
	this.tickConditions =[];

};

IncrementalEngine.prototype = {
	//Begin a game session with Tick Interval in milliseconds
	begin(n) {
		this.gameInterval = window.setInterval(this.onTick, n);
	},

	// loops through tickConditions and calls required functions
	onTick() {
		Number.isInteger(this.gameTick) ? this.gameTick += 1 : this.gameTick = 0;

		for (var key in this.resources) {
			if (this.resources.key.conditions.add > 0) {
				this.increaseResource(key, this.resources.key.conditions.add);
			}
			if (this.resources.key.conditions.minus > 0) {
				this.decreaseResource(key, this.resources.key.conditions.add);
			}
		}
	},

	addTickCondition(method, r, n){
		condition = {
			method: method,
			r: r,
			n: n
		};
		this.tickConditions.push(condition);

		return this.tickConditions;
	},

	createResource(r){
		this.resources[r] = {
			name: r,
			amount: 0,
			conditions: {add: 0, minus: 0}

		};
	},

	increaseResource(r, n) {
		this.resources.r.amount += n ? n : 1;
	},

	decreaseResouce(r, n) {
		this.resourcees.r.amount -= n ? n : 1;
	},
};


})();