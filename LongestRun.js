//  function that, given a string, finds the longest run of identical characters
//  and returns an array containing the start and end indices of that run

function longestRun (string) {
  var results = [0,0];
  var start, end;
  var length = 1;
  var maxLength = 1;
  for (var i = 0; i < string.length; i++) {
    length = 1;
    
    if (string[i] === string[i + 1]) {
      start = i;
      for (var j = i + 1; j < string.length; j++) {
         if (string[i] === string[j]) {
          length++;
          end = j;
         } else {
          break;
         }
      }
      if (length > maxLength) {
        maxLength = length;
        results[0] = start;
        results[1] = end;
      }
      i = end;
    }
  }
  return results;
}