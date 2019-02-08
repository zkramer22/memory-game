export const TILES = [
  { word: 'brother' },
  { word: 'brother' },
  { word: 'ocean' },
  { word: 'ocean' },
  { word: 'eggplant' },
  { word: 'eggplant' },
  { word: 'apple' },
  { word: 'apple' },
  { word: 'fur' },
  { word: 'fur' },
  { word: 'bop' },
  { word: 'bop' },
  { word: 'fourth' },
  { word: 'fourth' },
  { word: 'twigs' },
  { word: 'twigs' },
  // { word: 'sorry' },
  // { word: 'sorry' },
  // { word: 'silly' },
  // { word: 'silly' },
  // { word: 'after' },
  // { word: 'after' },
  // { word: 'lucky' },
  // { word: 'lucky' },
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
