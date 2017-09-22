function cheer(strings) {
  return _.map(strings, function foo(o) {
    return `${o.toUpperCase()} ${o.toUpperCase()}  ${o.toUpperCase()}!!!`;
  });
}

console.log(cheer(['apple', 'pear']));
