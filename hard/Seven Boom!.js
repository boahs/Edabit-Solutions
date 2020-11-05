function sevenBoom(arr) {
  const regex = /7/gm;
  return regex.test(arr) ? "Boom!" : "there is no 7 in the array";
}
