function findMaxAndMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return { max, min };
}

const inputArray = [5, 2, 7, 1, 9];
const result = findMaxAndMin(inputArray);

console.log(result);
