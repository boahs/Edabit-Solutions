function secondLargest(arr) {
  const largest = Math.max(...arr);
  const second = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < largest ? second.push(arr[i]) : null;
  }
  return Math.max(...second);
}
