function countZeroes(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  // check first element
  if (arr[0] === 0) return arr.length;

  // find the last 1
  while (leftIndex < rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === 1 && arr[middleIndex+1] === 0) {
      return arr.length - middleIndex - 1;
    } else if (arr[middleIndex] === 1) { // 
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex;
    }
  }

  // last 1 can't be found because no 0s:
  return 0;

}

module.exports = countZeroes