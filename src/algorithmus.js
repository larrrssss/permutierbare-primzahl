const { shuffle } = require('./utils');

function isPrimzahl(n) {
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i == 0)
      return false;
  return true;
}

function isPermutierbarePrimzahl(n) {
  const ns = String(n).split('').map(Number);

  const shuffled = shuffle(ns)
    .map((x) => Number(x.join('')));

  for (const x of shuffled)
    if (!isPrimzahl(x))
      return false;

  return true;
}