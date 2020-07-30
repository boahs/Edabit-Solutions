function sumArray(arr) {
  const flatten = arr.flat(Infinity);
  const reducer = (a, b) => a + b;
  return flatten.reduce(reducer);
}
