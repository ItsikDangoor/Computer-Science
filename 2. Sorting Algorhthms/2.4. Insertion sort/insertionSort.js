 log = console.log;

 function insertionSort(arrayToSort) {
 	var temp = 0;

 	for (let i = 0; i < arrayToSort.length; i += 1) {
 		//log("Initial state:\n", arrayToSort);
 		for(let j = i; j > 0; j -= 1) {
 			if(arrayToSort[j - 1] > arrayToSort[j]) {
 				temp = arrayToSort[j];
 				arrayToSort[j] = arrayToSort[j - 1];
 				arrayToSort[j - 1] = temp;
 				//log(arrayToSort);
 			}
 		}
 		//log("---------------------");
 	}

 	return arrayToSort;
 }

 log(insertionSort([7, 4, 2, 8, 3]));
 //log(insertionSort([122, 99, 135, 22, 11, 15, 22]));
 //log(insertionSort([7, 4, 2, 3, 9, 5, 3]));