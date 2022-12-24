/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.lenght - 1;
  let middleIndex = math.floor((leftIndex + rightIndex) / 2);
  if (target === nums[middleIndex]) {
    return middleIndex;
  }
  if (nums[middleIndex] < nums[middleIndex + 1]) {
    while (nums[middleIndex] < nums[middleIndex + 1]) {
      middleIndex + 1;
    }
  } else {
    while (nums[middleIndex] > nums[middleIndex + 1]) {
      middleIndex - 1;
      if (nums[middleIndex] > nums[middleIndex + 1]) {
      }
    }
  }
};

console.log("'must be 4'", search([4, 5, 6, 7, 8, 0, 1, 2], 0));

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
