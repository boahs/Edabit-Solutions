function tempConversion(c) {
  const F = ((c * 9) / 5 + 32).toFixed(2);
  const K = (c + 273.15).toFixed(2);
  const USA = parseFloat(F);
  const WORLD = parseFloat(K);
  return K < 0 ? "Invalid" : [USA, WORLD];
}
