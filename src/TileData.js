export const TILES = [
  { color: 'green', word: 'brother' },
  { color: 'blue', word: 'ocean' },
  { color: 'purple', word: 'eggplant' },
  { color: 'red', word: 'apple' },
  { color: 'steelblue', word: 'fur' },
  { color: 'teal', word: 'bop' },
  { color: 'peru', word: 'fourth' },
  { color: 'orange', word: 'twigs' },
  // --------------------------------
  { color: 'maroon', word: 'brother' },
  { color: 'darkkhaki', word: 'ocean' },
  { color: 'aqua', word: 'eggplant' },
  { color: 'lightpink', word: 'apple' },
  { color: 'lightgreen', word: 'fur' },
  { color: 'lightblue', word: 'bop' },
  { color: 'gold', word: 'fourth' },
  { color: 'darkgray', word: 'twigs' },
];

export const shuffler = arr => {
  var i, j, temp;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;
}
