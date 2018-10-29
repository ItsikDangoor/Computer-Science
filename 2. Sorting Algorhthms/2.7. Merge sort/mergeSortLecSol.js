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



const mergeSort = nums => {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const leftArr = nums.slice(0, middle);
  const rightArr = nums.slice(middle, length);
  
  return stitch(mergeSort(leftArr), mergeSort(rightArr));
};



const stitch = (leftArr, rightArr) => {
  
  const results = [];
  
  while (leftArr.length && rightArr.length) {
    
    if (leftArr[0] <= rightArr[0]) {
      results.push(leftArr.shift());
    }
    else {
      results.push(rightArr.shift());
    }
  }
  
  while(leftArr.length) {
    results.push(leftArr.shift());
  }
  while(rightArr.length) {
    results.push(rightArr.shift());
  }
  
  return results;
};

// unit tests
// do not modify the below code
describe('merge sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    var ans = mergeSort(nums);
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});