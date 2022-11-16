function findRotatedIndex(arr, num) {
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

  lowestNumberIndex = (lowestNumberIndex === undefined) ? 0 : lowestNumberIndex;

  let lowestNumber = arr[lowestNumberIndex];
  let highestNumber = arr[lowestNumberIndex-1] || arr[arr.length - 1]; // array not rotated if arr[0] is lowestNumber

  // edge cases
  if (num === lowestNumber) return lowestNumberIndex;
  if (num === highestNumber) return Math.min(...([lowestNumberIndex-1, arr.length-1].filter(el => el > -1)))

  // find num
  if (num <= arr[arr.length - 1]) {
    [leftIndex, rightIndex] = [lowestNumberIndex, arr.length-1];
  }
  else {
    [leftIndex, rightIndex] = [0, lowestNumberIndex-1];
  }

  let foundIndex;

  while ((foundIndex===undefined) && (leftIndex < rightIndex)) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === num) {
      foundIndex = middleIndex;
    } else if (arr[middleIndex] > num) {
      rightIndex = middleIndex-1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return foundIndex || -1;
}



module.exports = findRotatedIndex