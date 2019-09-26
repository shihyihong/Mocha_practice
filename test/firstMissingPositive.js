const should = require("should");
const randomNumber = require("../lib/randomNumber");
const firstMissingPositive = require("../lib/firstMissingPositive");

describe("Test firstMissingPositive  ", () => {
  it("[-5,0,3,4,5] should return 1", done => {
    let nums = [-5, 0, 3, 4, 5];
    let result = firstMissingPositive(nums);
    result.should.equal(1);
    done();
  });

  it("[-5,1,2,3] should return 4", done => {
    let nums = [-5, 1, 2, 3];
    let result = firstMissingPositive(nums);
    result.should.equal(4);
    done();
  });

  it("[1,2,5,6]  should return 3", done => {
    let nums = [1, 2, 5, 6];
    let result = firstMissingPositive(nums);
    result.should.equal(3);
    done();
  });

  it("[-4,-3,-2,-1]  should return 1", done => {
    let nums = [-4, -3, -2, -1];
    let result = firstMissingPositive(nums);
    result.should.equal(1);
    done();
  });

  it("[1,1,1,1]  should return 2", done => {
    let nums = [1, 1, 1, 1];
    let result = firstMissingPositive(nums);
    result.should.equal(2);
    done();
  });
});
