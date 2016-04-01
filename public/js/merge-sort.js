function mergeSort (arr) {

  if (arr.length < 2) {

    return arr;
  }

  var right = arr.splice(Math.floor(arr.length/2));
  var left = arr;

  return merge(mergeSort(left), mergeSort(right));
}


function merge (left, right) {

  var sorted = [];

  while (left.length > 0 && right.length > 0) {

    if (left[0] <= right[0]) {

      sorted.push(left[0]);
      left.splice(0, 1);
    }
    
    else {

      sorted.push(right[0]);
      right.splice(0, 1);
    }
  }

  while (left.length > 0) {

    sorted.push(left[0]);
    left.splice(0, 1);
  }

  while (right.length > 0) {

    sorted.push(right[0]);
    right.splice(0, 1);
  }

  return sorted;
}




var testArr = [5, 2, 4, 1, 8, 9, 3, 0, 7, 6, 10];
mergeSort(testArr);