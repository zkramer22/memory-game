export const SCORES = [
  { name: 'AKG', score: 9000, player: false },
  { name: 'ZZT', score: 7700, player: false },
  { name: 'OPO', score: 6750, player: false },
  { name: 'CLG', score: 5725, player: false },
  { name: 'LGD', score: 4000, player: false },
  { name: 'ACA', score: 3450, player: false },
  { name: 'BBB', score: 2325, player: false },
  { name: 'JER', score: 2050, player: false },
  { name: 'YUM', score: 1000, player: false },
];

export const insertAndSort = (arr, entry) => {
  var entryScore = entry.score;
  for (var i = 0, len = arr.length; i < len; i++) {
    var score1 = arr[i].score;

    if (entryScore > score1) {
      arr.splice(i, 0, entry);
      return arr;
    }
  }
  arr.push(entry);
  return arr;
};
