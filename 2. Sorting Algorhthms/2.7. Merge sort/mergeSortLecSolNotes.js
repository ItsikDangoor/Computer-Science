/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers
  
  To read the approach, refer to the class materials at 
  https://btholt.github.io/four-semesters-of-cs/
  
  As always, you can rename describe to be xdescribe to prevent the
  unit tests from running while you're working
  
  There is no visualization mechanism for this algorithm. Use your own
  preferred method of introspection like console.log().
*/

log = console.log;

//ES6//const mergeSort = (nums) => {
function mergeSort(nums) {
  if(nums.length < 2) {
    return nums;
  }
  
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const leftArr = nums.slice(0, middle);
  const rightArr = nums.slice(middle, length);
  
  /*short way
  return stitch(mergeSort(leftArr), mergeSort(rightArr));*/
  
  //more split apart way
  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);
  
  return stitch(sortedLeft, sortedRight);
};



//ES6//const stitch = (leftArr, rightArr) => {
function stitch(leftArr, rightArr) {
  const results = [];
  
  /*we are stitching two arrays! therefor they must have elements both of them
  the condition applys to both of them together and not seperate as I tried to do in my code.
  In condition statements the value ZERO in JS means --FALSE--(JS benefits LA LA LA),
   other numbers(1, -2, 5.7, -9.4) means --TRUE-- */

  //while (left.length > 0 && right.length > 0) {
  // OR
  while(leftArr.length && rightArr.length) {
    if(leftArr[0] <= rightArr[0]) {
      results.push(leftArr.shift());
    } else {
      results.push(rightArr.shift());
    }
  }
  
  //two possibility instead of while loop a head
  //return results.concat(leftArr, rightArr);
  //the same
  //return results.concat(rightArr, leftArr);
  
  /*OR be fancy, use the spread operator(ES6), spreading the arrays... 
  and concat them together(under the hood it using concat())*/
  //return [...results, ...rightArr, ...leftArr]
  
  //only one of the arrays will remain elements in it
  while(leftArr.length) {
    results.push(leftArr.shift());
  }
  
  while(rightArr.length) {
    results.push(rightArr.shift());
  }
  
  return results;
};



//var arrayToSort = [5, 1, 3, 2];
//var arrayToSort = [5, 1, 3, 2, 4];
//var arrayToSort = [5, 1, 2, 3, 2, 4];
var arrayToSort = [10,5,3,8,2,6,4,7,9,1];

log("------------------------");
log(mergeSort(arrayToSort));



// unit tests
// do not modify the below code
x_describe('merge sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    var ans = mergeSort(nums);
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});