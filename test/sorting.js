const should = require("should");
const sorting = require("../lib/sorting");
let arr = [];
for (let i = 0; i < 1000000; i++) {
  let number = Math.floor(Math.random() * 1000000);
  arr.push(number);
}
describe("1,000,000 numbers Sorting", () => {
  it("running time test", done => {
    let result = sorting(arr);
    done();
  });
});
