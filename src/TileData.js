export const TILES = [
  { word: 'brother' },
  { word: 'ocean' },
  { word: 'eggplant' },
  { word: 'apple' },
  { word: 'fur' },
  { word: 'bop' },
  { word: 'fourth' },
  { word: 'twigs' },
// -------------------- //
  { word: 'brother' },
  { word: 'ocean' },
  { word: 'eggplant' },
  { word: 'apple' },
  { word: 'fur' },
  { word: 'bop' },
  { word: 'fourth' },
  { word: 'twigs' },
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
