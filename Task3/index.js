function findIndices(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];

    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

// Example usage
const numbers = [1, 2, 3, 5, 9, 11, 13, 17];
const targetSum = 10;

const result = findIndices(numbers, targetSum);

if (result !== null) {
  const [index1, index2] = result;
  console.log(`Indices: ${index1} and ${index2}`);
  console.log(`Values: ${numbers[index1]} and ${numbers[index2]}`);
} else {
  console.log("No such indices found.");
}
