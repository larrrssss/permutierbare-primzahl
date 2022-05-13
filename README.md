# Permutierbare Primzahlen

Bei einer Zahl handelt es sich um eine Primzahl, die bei einer beliebigen Neuanordnung der einzelnen Ziffern ebenfalls eine Primzahl ergibt. Die Zahl ist demnach unabhängig von der Anordnung der Ziffern eine Primzahl.

Die Zahl `73` ist eine permutierbare Primzahl, da beide Kombinationen (`73` und `37`) jeweils Primzahlen sind.

## Was ist eine Primzahl?

Eine Primzahl ist eine natürliche Zahl größer 1, die nur durch sich selbst und die Zahl 1 teilbar ist.

## Algorithmus

Folgende Schritte sind notwendig um zu überprüfen, ob eine gegebene Zahl `n` eine permutierbare Primzahl ist.

1. **Alle möglichen Zahlenkombinationen berechnen**
    Zu Beginn ist es Notwendig alle möglichen Anordnungen der Zahl `n` zu berechnen. Dazu iteriert man über jede einzelne Ziffer der Zahl `n` und kombiniert diese Ziffer mit allen aderen. 
    _Beispiel:_ 
    Gegeben ist die Zahl `n = 113`. Jede mögliche Neuanordnung würden folgende Kombinationen ergeben: `[113, 131, 311]`,
2. **Primzahlen**
    Nun iteriert man durch alle Kombinationen aus Schritt eins und überprüft, ob die jeweilige Zahl eine Primzahl ist. Sollte eine der Zahlen keine Primzahl sein, handelt es sich **nicht** um eine permutierbare Primzahl.

## Code

### Primzahlen

Folgende Funktion überprüft, ob eine gegebene Zahl `n` eine Primzahl ist

```js
function isPrimzahl(n) {
  for (let i = 2; i <= Math.sqrt(n); i++)
    // Es gibt ein Teiler t != n
    if (n % i == 0)
      return false;
  return true;
}
```

### Hilfsfunktion zur Berechnung aller möglichen Kombinationen

```js
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
```

Quelle: StackOverflow [(JSFiddle)](http://jsfiddle.net/BGYk4/)

### Permutierbare Primzahl

```js
function isPermutierbarePrimzahl(n) {
  // Aufteilung der Zahl in seine einzelnen Ziffern
  const ns = String(n).split('').map(Number);

  // Array Shufflen und alle Kombinationen berechnen
  const shuffled = shuffle(ns)
    .map((x) => Number(x.join('')));

  // Für jede Kombination
  for (const x of shuffled)+
    // Wird überprüft, ob sie eine Primzahl ist
    if (!isPrimzahl(x))
      // Es existiert eine Kombination, die keine Primzahl ist => Keine permutierbare Primzahl
      return false;

  // Die Zahl ist eine permutierbare Primzahl
  return true;
}
```
