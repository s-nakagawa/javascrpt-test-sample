describe("前処理", function () {
	beforeEach(function () {
		calcObject.setTimeValue(20);
	});
	it("整数値の掛け算", function () {
		var val = 23;
		var expectVal = 23 * 20;
		expect(expectVal).toEqual(calcObject.calc(val));
	});
});

describe("前処理2", function () {
	describe("前処理子要素のみ", function () {
		beforeEach(function () {
			calcObject.setTimeValue(0);
		});
		it("初期値のテスト", function () {
			var val = 23;
			expect(0).toEqual(calcObject.calc(val));
		});
		it("初期値のテスト2", function () {
			var val = 40;
			expect(0).toEqual(calcObject.calc(val));
		});
	});
	describe("前処理子要素のみ", function () {
		beforeEach(function () {
			calcObject.setTimeValue(30);
		});
		it("整数値の掛け算", function () {
			var val = 23;
			var expectVal = 23 * 30;
			expect(expectVal).toEqual(calcObject.calc(val));
		});
	});

});