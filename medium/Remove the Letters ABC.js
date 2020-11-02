const removeABC = (str) => {
  const regex = /[abc]/g;
  return str.match(regex) ? str.replace(regex, "") : null;
};
