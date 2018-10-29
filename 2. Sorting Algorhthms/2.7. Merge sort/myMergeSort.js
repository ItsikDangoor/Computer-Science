log = console.log;

function mergeSort(array) {
	var indexMid = 0;

	if(array.length === 1) {
		return array;
	} else {
		indexMid = (array.length / 2) - ((array.length / 2) % 1);
		log(array.slice(0, indexMid));
		log(array.slice(indexMid, array.length));
		return stitch2(mergeSort(array.slice(0, indexMid)), 
								mergeSort(array.slice(indexMid, array.length)));
		//stitch(mergeSort(array.slice(0, indexMid)), mergeSort(array.slice(indexMid, array.length - 1)));
	}
}

function stitch(array1, array2) {}

function stitch2(array1, array2) {
	log("Start --- stitch function");
	log(array1);
	log(array2);
	var sortedArray = [];
	var halfFinalSortedArrLen = (array1.length + array2.length) / 2;
	log("BEFORE --- halfFinalSortedArrLen = ", halfFinalSortedArrLen);

	//while(sortedArray.length !== halfFinalSortedArrLen) {
	for(let index = 0, i = 0, j = 0; sortedArray.length !== halfFinalSortedArrLen; index +=1) {
		log("halfFinalSortedArrLen = ", halfFinalSortedArrLen);
		log("sortedArray.length = " + sortedArray.length);
		if(array1[i] < array2[j]) {
			log("array1[i] = ", array1[i]);
			sortedArray[index] = array1[i];
			i += 1;
			/*sortedArray.unshift(array1[i]);//add the element to the beginning of the array
			array1.shift();//remove the first element of array, and update the length*/
		} else {
			log("array2[j] = ", array2[j]);
			sortedArray[index] = array2[j];
			j += 1;
			/*sortedArray.unshift(array2[j]);
			array2.shift();*/
		}
		log("END LOOP --- sortedArray.length = " + sortedArray.length);
	}

	if(array1.length > 0) {
		Array.prototype.push.apply(sortedArray, array1);
	} else if(array2.length > 0) {
		Array.prototype.push.apply(sortedArray, array2);
	}
	log("sortedArray = ", sortedArray);
	log("End --- stitch function");
	return sortedArray;
}


function stitch3(array1, array2) {
	log("stitch function");
	log(array1);
	log(array2);
	var sortedArray = [];

	for(let i = 0, j = 0; 0 < array1.length ; ) {
		if(array1[i] < array2[j]) {
			sortedArray.unshift(array1[i]);//add the element to the beginning of the array
			array1.shift();//remove the first element of array, and update the length
		} else {
			sortedArray.unshift(array2[j]);
			array2.shift();
		}

		if(array1.length === 0) {
			break;
		} else if(array2.length === 0) {
			break;
		}
	}

	if(array1.length > 0) {
		Array.prototype.push.apply(sortedArray, array1);
	} else if(array2.length > 0) {
		Array.prototype.push.apply(sortedArray, array2);
	}
	log("sortedArray = ", sortedArray);
	return sortedArray;
}




var arrayToSort = [1, 5, 3, 2];
//var arrayToSort = [1, 5, 3, 2, 4];
//var arrayToSort = [10,5,3,8,2,6,4,7,9,1];

/*var indexMid = (arrayToSort.length / 2) - ((arrayToSort.length / 2) % 1);
log("arrayToSort: " + arrayToSort);
log("arrayToSort.length: " + arrayToSort.length);
log("indexMid: ", indexMid);
log(arrayToSort.slice(0, indexMid));
log(arrayToSort.slice(indexMid, arrayToSort.length));*/

log("------------------------");
log(mergeSort(arrayToSort));

