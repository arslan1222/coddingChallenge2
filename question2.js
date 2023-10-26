function removeDuplicatesFromArray(arr) {
  return [...new Set(arr)];
}

// Example usage:
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = removeDuplicatesFromArray(inputArray);

console.log([...uniqueSet]); // Convert the Set back to an array for display
