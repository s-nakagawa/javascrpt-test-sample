describe("first test", function () {
  it("整数の掛け算", function () {
    var val1 = 23;
    var val2 = 40;
    var expectVal = 23 * 40;
    expect(expectVal).toEqual(calc(val1, val2));
  });

  it("0を含む掛け算", function () {
    var val1 = 0;
    var val2 = 40;
    var expectVal = 0;
    expect(expectVal).toEqual(calc(val1, val2));
  });
});