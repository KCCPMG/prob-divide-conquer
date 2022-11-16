function findRotationCount(arr) {
  let [leftIndex, rightIndex] = [0, arr.length];
  let lowestNumberIndex;

  // find lowestNumber
  while ((lowestNumberIndex === undefined) && (leftIndex < rightIndex)) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] < arr[middleIndex - 1]) {
      lowestNumberIndex = middleIndex;
    } else if (arr[middleIndex] > arr[leftIndex]) { 
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex;
    }
  }

  return lowestNumberIndex || 0;
}

module.exports = findRotationCount