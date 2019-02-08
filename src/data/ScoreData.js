export const SCORES = [
  { name: 'AKG', score: 9000 },
  { name: 'ZZT', score: 7700 },
  { name: 'OPO', score: 6750 },
  { name: 'CLG', score: 5725 },
  { name: 'LGD', score: 4000 },
  { name: 'ACA', score: 3450 },
  { name: 'BBB', score: 2325 },
  { name: 'JER', score: 2050 },
  { name: 'YUM', score: 1000 },
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
