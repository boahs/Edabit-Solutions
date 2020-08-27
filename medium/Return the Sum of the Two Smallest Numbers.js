function sumTwoSmallestNums(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sortedArray = arr.sort((a, b) => a - b);
  const removedNegatives = sortedArray.filter((x) => x > 0).slice(0, 2);
  return removedNegatives.reduce(reducer);
}
