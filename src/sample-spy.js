var origine = {
	calc: function (value1, value2, type) {
        var result = 0;
		if (type === "time") {
			result = this.time(value1, value2);
		} else if (type === "divide") {
			result = this.divide(value1, value2);
		}
		return result;
	},
	time: function (value1, value2) {
		return value1 * value2;
	},
	divide: function (value1, value2) {
		return value1 / value2;
	}
};