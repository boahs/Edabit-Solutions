function removeDups(arr) {
  const unique = [...new Set(arr)];
  return unique;
}
