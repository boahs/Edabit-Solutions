const capMe = (arr) =>
  arr.map(
    (x) => x.substring(0, 1).toUpperCase() + x.substring(1, 50).toLowerCase()
  );
