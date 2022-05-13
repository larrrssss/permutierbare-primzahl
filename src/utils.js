function shuffle(arr) {
  const output = [];
  const n = arr.length;
  const ways = [];

  for (let i = 0, j = 1; i < n; ways.push(j *= ++i));

  const totalWays = ways.pop();
  for (let i = 0; i < totalWays; i++) {
    const copy = arr.slice();
    output[i] = [];
    for (let k = ways.length - 1; k >= 0; k--) {
      const c = Math.floor(i/ways[k]) % (k + 2);
      output[i].push(copy.splice(c,1)[0]);
    }
    output[i].push(copy[0]);
  }

  return output;
}

module.exports = {
  shuffle,
};