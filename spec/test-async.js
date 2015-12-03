describe("非同期", function () {
	var isOk = false;
	beforeEach(function (done) {
		setTimeout(function () {
			isOk = true;
			done();
		}, 1000);
	});
	it("非同期処理後に実施されるはず", function (done) {
		expect(isOk).toBe(true);
		done();
	});
});