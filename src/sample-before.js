var calcObject = {
	timeValue: 0,
	calc: function (value) {
        var result = value * this.timeValue;
		return result;
	},
	setTimeValue: function (value) {
		this.timeValue = value;
	}
};