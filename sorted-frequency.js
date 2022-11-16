function sortedFrequency(arr, num) {

  let [leftIndex, rightIndex] = [0, arr.length];
  let firstFoundIndex;

  // check first element
  if (arr[0] === num) firstFoundIndex = 0;

  // find first element match
  while ((firstFoundIndex===undefined) && (leftIndex < rightIndex)) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === num && arr[middleIndex - 1] !== num) {
      firstFoundIndex = middleIndex;
    } else if (arr[middleIndex] === num) {
      rightIndex = middleIndex;
    } else {
      leftIndex = middleIndex + 1;
    }

  }

  if (firstFoundIndex===undefined) return - 1;

  let lastFoundIndex;
  // check last element
  if (arr[arr.length-1] === num) lastFoundIndex = arr.length-1;

  [leftIndex, rightIndex] = [firstFoundIndex, arr.length];

  // find last element match
  while((lastFoundIndex===undefined) && (leftIndex < rightIndex)) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === num && arr[middleIndex + 1] !== num) {
      lastFoundIndex = middleIndex;
    } else if (arr[middleIndex] === num) {
      leftIndex = middleIndex;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return lastFoundIndex - firstFoundIndex + 1;
}

module.exports = sortedFrequency