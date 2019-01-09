/* 1. #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(numArr){
  var newArr = [];
  for(var i = 0; i<numArr.length; i++){
    newArr.push(numArr[i]*2);
  }
  return newArr;
}

  
/* 2. #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var sumArrays = function(arr1,arr2){
var sum = 0;
var sumArr = arr1.concat(arr2);
for(var i =0; i<sumArr.length; i++ ){
  sum += sumArr[i];
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
var stringCount = function(string){
  return string.length;
}



/* 4. #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(array){
  return array.length;
}



/* 5. #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr){
  var sum = 0;
  for(var i =0; arr.length; i++){
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
var countStrings = function(strArr){
  var strLengthArr = [];
  for(var i =0; i<strArr.length;i++){
    strLengthArr.push(strArr[i].length) 
  }
  return strLengthArr;
}


/* 7. #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(strArray){
  var allStr = strArray.join('');
  for(var i =0; i<allStr; i++){
  }
  return allStr.length;
}


/* 8. #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(object){
  var arr = [];
  for(var key in object){
    arr.push(object[key]);
  }
  return arr;
}

/* 9. #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(object){
  return Object.keys(object).length;
}


/* 10. #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function(number){
  var x = number;
  return new Array(x).fill(0);
}


/* 11. #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(numArr){
  numArr.pop();
  return numArr
}


/* 12. #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(string){
  return string.split('')
}


/* 13. #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(strArr){
  var lastStr = strArr.pop();
  return lastStr.length
}


/* 14. #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(numArr){
  var sum = 0;
  for(var i=0; i<numArr.length; i++){
    if(numArr[i] < 10){
      sum += numArr[i];
    }
  }return sum;
}

/* 15. #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(string){
  var newArr = [];
  for(var i =0; i<string.length; i++){
    if(string[i].length > 10){
      newArr.push(string[i])
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
var multiplyAll = function(numArr){
  var sum = 1;
  for(var i =0; i<numArr.length; i++){
    sum = sum * numArr[i];
  }
  return sum;
}


/* 17. #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(string){
  var sum = 0;
  for(var i =0; i<string.length; i++){
    if(string[i] > 0){
      sum = sum + string[i];
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
var stringCountBelowThree = function(strArr){
  var charNum = 0;
  for(var i =0; i<strArr.length; i++){
    if(strArr[i].length <=3){
      charNum++
    }
  }return charNum;
}

/* 19. #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(objArr){
  for(var i =0; i<objArr.length; i++){
    }
    return objArr.length;
}

/* 20. #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(object){
  return Object.keys(object);
}

/* 21. #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(object){
  return Object.values(object);
}

/* 22. #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key,value){
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
var makeObjectReverse = function(value,key){
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
var tupleToObject = function(array){
  var key = array[0];
  var obj = {};
  obj[key] = array[1];
  return obj;
}


/* 25. #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(array){
  var key = array[1];
  var obj = {};
  obj[key] = array[0];
  return obj;
}

/* 26. #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(strArr){
  var obj = {};
  for(var i =0; i<strArr.length; i++){
    var key = strArr[i];
    obj[key] = 0;
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
var getValues = function(object){
  var arr = [];
  for(key in object){
    arr.push(object[key]);
  }
  return arr;
}

/* 28. #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(object){
  var arr = [];
  for(key in object){
    arr.push(key);
  }
  return arr;
}

/* 29. #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj){
  var tupleArr = [];
  var objValues = Object.values(obj);
  for(var i =0; i<objValues.length; i++){
    var newArr = [];
    newArr[0] = 0;
    newArr[1] = 1;
    tupleArr.push(newArr);
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
var arrayToObject = function(array){
  var obj = {};
  for(var i =0; i<array.length; i++){
    var key = array[i];
    obj[key] = false;
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
var arraysToObject = function(arr1,arr2){
  var obj = {};
  for(var i =0; i<arr1.length; i++){
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
var objectsToTuples = function(obj1,obj2){
  var newArr = [];
  for(var i in obj1){
    var arr1 = [];
    arr1.push(i,obj1[i]);
    newArr.push(arr1);
  }
  for(var j in obj2){
    var arr2 = [];
    arr2.push(j,obj2)[j];
    newArr.push(arr2);
  }
  return newArr;
}


/* 33. #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(strArr){
  var obj = {};
  for(var i =0; i<strArr.length;i++){
    var key = strArr[i];
    obj[key] = true;
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
var mapStringCounts = function(arr){
  var obj = {};
  for(var i =0; i<arr.length; i++){
    if(arr[i].length >=5){
      obj[arr[i]] = true;
    }else{
      obj[arr[i]] = false
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
var arrayToObjectNums = function(array){
  var obj = {};
  for(var i =0; i<array.length; i++){
    var key = array[i];
    obj[key] = true;
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
var stringToKeys = function(string){
  var obj = {};
  var splitStr = string.split('');
  for(var i =0; i<splitStr.length; i++){
    var key = splitStr[i];
    obj[key] = true
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
var charCountMap = function(array){
  var obj = {};
  for(var i =0; i<array.length; i++){
    var key = array[i];
    obj[key] = key.length;
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
var frequencyMap;

/* 39. #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function(string){
  var obj = {};
  for(var i =0; i<string.length; i++){
    obj[string[i][0]] = string[i][1];
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
  frequencyMap: null,
  tupleConvertToObject: tupleConvertToObject
}
