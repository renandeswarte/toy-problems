// Swap values in the array
var swapValues = function(array, i, j) {
  var temp;
  temp = array[ i ];
  array[ i ] = array[ j ];
  array[ j ] = temp;
};

var bubbleSort = function(array) {
  for (var i = array.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[ j ] > array[ j + 1] ) {
        swapValues( array , j , j + 1 );
      }
    }
  }
  return array;
}

// * Other Solution using a while loop *

var bubbleSort = function(array) {
  // Set intitial sorted value to false to get into the loop
  var sorted = false;

  while (!sorted) {
    sorted = true;
    for (var i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        sorted = false;
        swapValues(array, i, i - 1);
      }
    }
  }

  return array;
};

