function testJackpot(result) {
  const allEqual = result.every((v) => v === result[0]);
  return allEqual;
}
