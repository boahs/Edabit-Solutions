function oldest(people) {
  return Object.keys(people).reduce((a, b) => (people[a] > people[b] ? a : b));
}
