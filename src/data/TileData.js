export const TILES = [
  { word: 'Brother', id: 0 },
  { word: 'B', id: 0 },
  { word: 'Ocean', id: 1 },
  { word: 'O', id: 1 },
  { word: 'Eggplant', id: 2 },
  { word: 'E', id: 2 },
  { word: 'Apple', id: 3 },
  { word: 'A', id: 3 },
  { word: 'Fur', id: 4 },
  { word: 'F', id: 4 },
  { word: 'Hope', id: 5 },
  { word: 'H', id: 5 },
  { word: 'Play', id: 6 },
  { word: 'P', id: 6 },
  { word: 'Twig', id: 7 },
  { word: 'T', id: 7 },
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
