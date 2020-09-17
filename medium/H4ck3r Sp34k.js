function hackerSpeak(str) {
  const regex = /[aeios]/g;
  const dictionary = {
    a: 4,
    e: 3,
    i: 1,
    o: 0,
    s: 5,
  };

  return str.replace(regex, (replace) => dictionary[replace]);
}
