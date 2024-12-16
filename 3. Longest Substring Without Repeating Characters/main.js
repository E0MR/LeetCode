/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charSet = new Set(); // To store unique characters
  let left = 0; // Left pointer of the sliding window
  let maxLength = 0; // Track the maximum length of a substring

  for (let right = 0; right < s.length; right++) {
    // If character is already in the set, remove from the left
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    // Add the current character to the set
    charSet.add(s[right]);

    // Update the maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
