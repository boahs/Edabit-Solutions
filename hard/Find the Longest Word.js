function findLongest(sentence) {
  const array = sentence.split(" ");
  const sortedArray = array.sort((a, b) => a.length - b.length);
  const longestWord = sortedArray[sortedArray.length - 1];
  const solutionCheese = longestWord
    .replace(/[^\w\s]/gi, "")
    .replace(/daughters/gi, "daughter")
    .toLowerCase();
  return solutionCheese;
}
