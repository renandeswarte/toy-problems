// Find the first item that occurs an even number of times in an array

function evenOccurence (arr) {
  
  var resultObj = {};
  
  for (var i = 0; i < arr.length; i++) {
    if (!resultObj[arr[i]]) {
      resultObj[arr[i]] = 1;
    } else {
      resultObj[arr[i]]++;
    }
  }
  
  for (var element in resultObj) {
    if ( !(resultObj[element] % 2) ) {
      return (!isNaN(parseInt(element))) ? parseInt(element) : element;
    }
  }  
  
  return null;
};