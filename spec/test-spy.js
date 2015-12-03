describe("Mockテスト", function () {
  it("Mockなし", function () {
    var val1 = 23;
    var val2 = 40;
    var expectVal = 23 * 40;
    expect(expectVal).toEqual(origine.calc(val1, val2, "time"));
  });

  it("Mockあり", function () {
    spyOn(origine, "time").and.returnValue(745);
    origine.time(123);
    var val1 = 23;
    var val2 = 40;
    expect(745).toEqual(origine.calc(val1, val2, "time"));
  });  
});