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

log = console.log;

function bubbleSort(arrayOfNum) {
  let swaped = false;
  let tempValue = 0;
  
  do{
    //log("/////new iteration/////");
    swaped = false;
    for(let i = 0; i < arrayOfNum.length - 1; i += 1) {
      //log(arrayOfNum);
      if(arrayOfNum[i] > arrayOfNum[i + 1]) {
        tempValue = arrayOfNum[i];
        arrayOfNum[i] = arrayOfNum[i + 1];
        arrayOfNum[i + 1] = tempValue;
        swaped = true;
        //log("swaped --> " + arrayOfNum);
      }
      
    }
  }while(swaped)
}



log(bubbleSort([5, 7, 6, 4]));
log(bubbleSort([10,5,3,8,2,6,4,7,9,1]));

