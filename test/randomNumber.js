const should = require("should");
const randomNumber = require("../lib/randomNumber");

describe("Test Non-Repetitive", () => {
  it("result.length is equal to set.size", done => {
    let result = randomNumber();
    let testSet = new Set(result);
    testSet.size.should.equal(result.length);
    done();
  });
});
