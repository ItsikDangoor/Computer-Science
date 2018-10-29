/*
  Write a bubble sort here
  Name the function bubbleSort
  
  If you want to suspend running the unit tests, change describe to xdescribe
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
  
  Provided is an optional visualization helper. Call snapshot(yourArray) at the
  beginning of each iteration of your inner loop with the state of the being-sorted
  array and the helper tool will show you how your array looks in the HTML section
  of CodePen. This is optional and only for your help.
  
*/


function bubbleSort(arrayOfNum) {
  let swaped = false;
  let tempValue = 0;
  
  do{
    console.log("new iteration");
    swaped = false;
    for(let i = 0; i < arrayOfNum.length - 1; i += 1) {
      snapshot(arrayOfNum);
      if(arrayOfNum[i] > arrayOfNum[i + 1]) {
        tempValue = arrayOfNum[i];
        arrayOfNum[i] = arrayOfNum[i + 1];
        arrayOfNum[i + 1] = tempValue;
        swaped = true;
      }
    }
  }while(swaped)
  snapshot(arrayOfNum);
}



// unit tests
// do not modify the below code
describe('bubble sort', function() {
  it('should sort correctly', () => {
    //var nums = [10,5,3,8,2,6,4,7,9,1];
    var nums = [5, 7, 6, 4];
    bubbleSort(nums);
    //expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
    expect(nums).toEqual([4, 5, 6, 7]);
    done();
  });
});
  

//by the author
/* 
function bubbleSort (nums) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < nums.length - 1; i++) {
      snapshot(nums)
      // more code goes here
      if (nums[i] > nums[i+1]) {
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
        swapped = true
      }
    }
  } while (swapped)
  snapshot(nums)
}*/