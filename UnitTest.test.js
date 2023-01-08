const mergeSort = require("./UnitTest");

test("Must merge sorted from min(0) to max properly", () => {
  let array = [7, 3, 2, 16, 24, 4, 11, 9];
  expect(mergeSort(array)).toStrictEqual([2, 3, 4, 7, 9, 11, 16, 24]);
});
