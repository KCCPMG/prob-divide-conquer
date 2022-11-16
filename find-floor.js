function findFloor(arr, num) {
  
  // edge cases
  if (arr[0] > num) return -1;
  if (arr[arr.length-1] < num) return arr[arr.length-1];
  
  // else
  let [leftIndex, rightIndex] = [0, arr.length-1];

  while (leftIndex < rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] < num && num < arr[middleIndex + 1]) {
      return arr[middleIndex];
    } else if (arr[middleIndex < num]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
}

module.exports = findFloor