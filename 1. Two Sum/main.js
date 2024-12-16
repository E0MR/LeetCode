/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i != j) {
        return [i, j];
      }
    }
  }
};

/*
// Better Solution //
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Create a map to store numbers and their indices
  const numMap = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if the complement is already in the map
    if (numMap.has(complement)) {
      return [numMap.get(complement), i]; // Return the indices
    }

    // Otherwise, store the current number with its index
    numMap.set(nums[i], i);
  }

  // This should never be reached due to the problem constraints
  throw new Error("No solution exists");
};
