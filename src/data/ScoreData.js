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
  for (var i = arr.length - 1; i > 0; i--) {
    var j = i - 1,
        score1 = arr[i].score,
        score2 = arr[j].score;
    if (entry.score > score1) {
      if (entry.score < score2) {
        arr.splice(i, 0, entry);
        return arr;
      }
      else {
        continue;
      }
    }
    else {
      arr.push(entry);
      return arr;
    }
  }
}
