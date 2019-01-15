/* 1. #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
function doubleArray(arr){
  var dblArr = [];
  for(var i=0; i<arr.length; i++){
    dblArr.push(arr[i] *2);
  }
  return dblArr;
}
  
/* 2. #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
function sumArrays(arr1, arr2){
  var sum = 0;
  var arr3 = arr1.concat(arr2);
  for(var i=0; i<arr3.length; i++){
    sum += arr3[i];
  }
  return sum;
}



/* 3. #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
function stringCount(string){
  return string.length;
}


/* 4. #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
function arrayLength(arr){
  return arr.length;
}




/* 5. #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
function countAll(arr){
  sum = 0;
  for(var i =0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

/* 6. #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
function countStrings(arr){
  var stgLengthArr = [];
  for(var i =0; i<arr.length; i++){
    stgLengthArr.push(arr[i].length);
  }
  return stgLengthArr;
}


/* 7. #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
function countAllStrings(strArr){
  sum = 0;
  for(var i=0; i<strArr.length; i++){
    sum += strArr[i].length;
  }
  return sum;
}


/* 8. #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
function convertToArray(obj){
  return Object.values(obj);

}

/* 9. #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
function objectSize(obj){
  return Object.entries(obj).length;
}



/* 10. #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
function createZeroFilledArray(num){
  return new Array(num).fill(0)
}

/* 11. #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
function poppedArray(numArr){
  numArr.pop();
  return numArr;
}


/* 12. #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
function splitString(string){
  return string.split('')
}


/* 13. #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
function lengthOfLast(strArr){
  var lastStr = strArr.pop()
  return lastStr.length;
}

/* 14. #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
function sumBelowTen(numArr){
 var sum = 0;
 for(var i=0; i<numArr.length; i++){
   if(numArr[i] < 10){
     sum += numArr[i];
   }
 } return sum;
}


/* 15. #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
function moreThanTenLetters(strArr){
  var newArr = [];
  for(var i=0; i<strArr.length; i++){
    if(strArr[i].length > 10){
      newArr.push(strArr[i]);
  }
  }return newArr.length;
}


/* 16. #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
function multiplyAll(numArr){
  var prod = 1;
  for(var i=0; i<numArr.length; i++){
    prod *= numArr[i];
  }
  return prod;
}


/* 17. #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
function sumAllPositive(numArr){
  var sum = 0;
  for(var i=0; i<numArr.length; i++){
    if(numArr[i] > 0){
      sum += numArr[i];
    }
  }return sum;
}

 
/* 18. #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
function stringCountBelowThree(strArr){
  var newArr = [];
  for(var i=0; i<strArr.length; i++){
    if(strArr[i].length <= 3){
      newArr.push(strArr[i]);
    }
  }return newArr.length;
}



/* 19. #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
function countObjects(objArr){
  return objArr.length;
}

/* 20. #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
function getObjectKeys(obj){
  return Object.keys(obj);
}

/* 21. #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
function getObjectValues(obj){
  return Object.values(obj);
}

/* 22. #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
function makeObject(key,value){
  var obj = {};
  obj[key] = value;
  return obj;
}

/* 23. #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
function makeObjectReverse(value,key){
  var obj = {};
  obj[key] = value;
  return obj;
}

/* 24. #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
function tupleToObject(arr){
  var obj = {};
  obj[arr[0]] = arr[1];
  return obj;
}

/* 25. #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
function tupleToObjectReverse(tuple){
  var obj = {};
  obj[tuple[1]] = tuple[0];
  return obj;
}


/* 26. #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
function strToKeys(strArr){
  var obj = {};
  for(var i=0; i<strArr.length; i++){
    obj[strArr[i]] = 0;
  }
  return obj;
}


/* 27. #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
function getValues(obj){
  return Object.values(obj);
}


/* 28. #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
function getKeys(obj){
  return Object.keys(obj)
}

/* 29. #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
function objectToArray(obj){
  var tupleArr = [];
  var objVal = Object.values(obj)
  for(var i=0; i<objVal.length; i++){
    var newArr = [];
    newArr[0] = 0;
    newArr[1] = 1;
    tupleArr.push(newArr)
  }
  return tupleArr;
}
 
/* 30. #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
function arrayToObject(arr){
  var obj = {};
  for(var i=0; i<arr.length; i++){
    obj[arr[i]] = false;
  }
  return obj;
}

/* 31. #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
function arraysToObject(arr1,arr2){
  var obj = {};
  for(var i=0; i<arr1.length; i++){
    obj[arr1[i]] = arr2[i];
  }
  return obj;
}

/* 32. #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
function objectsToTuples(obj1,obj2){
  var result = [];
  for(key in obj1){
    var arr1 = [];
    arr1.push(key,obj1[key]);
    result.push(arr1);
  }
  for(key in obj2){
    var arr2 = [];
    arr2.push(key, obj2[key]);
    result.push(arr2);
  }
  return result;
}
 

/* 33. #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
function mapArrayValues(strArr){
  var obj = {};
  for(var i=0; i<strArr.length; i++){
    obj[strArr[i]] = true;
  }
  return obj;
}

/* 34. #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
function mapStringCounts(strArr){
  var obj = {};
  for(var i=0; i<strArr.length; i++){
    if(strArr[i].length >= 5){
      obj[strArr[i]] = true;
    }else{
      obj[strArr[i]] = false;
    }
  }return obj;
}

/* 35. #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
function arrayToObjectNums(numArr){
  var obj = {};
  for(var i=0; i<numArr.length; i++){
    obj[numArr[i]] = true;
  }
  return obj;
}


/* 36. #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
function stringToKeys(string){
  var obj = {};
  var char = string.split('');
  for(var i =0; i<char.length; i++){
    obj[char[i]] = true;
  }
  return obj;
}


/* 37. #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
function charCountMap(strArr){
  var obj = {};
  for(var i =0; i<strArr.length; i++){
    obj[strArr[i]] = strArr[i].length;
  }
  return obj;
}

/* 38. #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
function frequencyMap(strArr){
  var obj = {};
  for(var i=0; i<strArr.length; i++){
  obj[strArr[i]] = (obj[strArr[i]] || 0) + 1;
  }
  return obj;
}

/* 39. #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
function tupleConvertToObject(arr){
  var obj = {};
  for(var i=0; i<arr.length; i++){
  obj[arr[i][0]] = arr[i][1];
}
  return obj;
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
