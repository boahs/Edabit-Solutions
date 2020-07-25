function sayHelloBye(name, num) {
  const f = name.charAt(0).toUpperCase() + name.slice(1);
  return num === 1 ? `Hello ${f}` : `Bye ${f}`;
}
