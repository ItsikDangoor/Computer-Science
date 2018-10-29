/*

  Quicksort!
  
  Name your function quickSort.
  
  Quicksort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.
  
  As always, you can change describe to xdescribe to prevent the unit tests from running while you're coding.
  
  No visualization is provided so feel free to use your own debugging methods (like console.log).

*/

function quickSort(array) {
  if(array.length <= 1) {
    return array;
  }

  var pivot = array[array.length - 1];
  var leftArray = [], rightArray = [], sortedArray = [];

  for(let index = 0; index < array.length - 1; index += 1) {
    if(array[index] <= pivot) {
      leftArray.push(array[index]);
    } else {
      rightArray.push(array[index]);
    }
  }
  
  leftArray = quickSort(leftArray);
  rightArray = quickSort(rightArray);
  Array.prototype.push.apply(sortedArray, leftArray);
  sortedArray.push(pivot);
  Array.prototype.push.apply(sortedArray, rightArray);
  
  return sortedArray;
}

// unit tests
// do not modify the below code
describe('quickSort', function() {
  it('quicksort an array', () => {
    const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
    const answer = quickSort(input);
    
    expect(answer).toEqual([1,2,3,4,5,6,7,8,9,10]);

  });
});