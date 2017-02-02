class GuessingGame {
    constructor() {
    	this.arr = [];
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    	for (min = 0; min <= max ; min++){
    		this.arr[min] = min;
    	}
    	
    }

    guess() {
    	this.current = Math.ceil((this.max+this.min)/2);
    	return this.current;
    	     }

    lower() {
    	this.max = this.current;
    	return this.max;
    }

    greater() {
    	this.min = this.current;
    	return this.min;
    }
}

module.exports = GuessingGame;

