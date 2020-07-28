function capToFront(s) {
  const caps = /[A-Z]/g;
  const lower = /[a-z]/g;
  const strOne = s.match(caps);
  const strTwo = s.match(lower);
  return strOne.join("") + strTwo.join("");
}
