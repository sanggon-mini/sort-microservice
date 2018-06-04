export const bubbleSort = list => {
  let n = list.length;

  if (n <= 1) {
    return list;
  }

  let newN;
  do {
    newN = 0;
    for (let i = 1; i < n; ++i) {
      if (list[i-1] > list[i]) {
        swap(list, i - 1, i);
        console.log(JSON.stringify(list));
        newN = i;
      }
    }
    n = newN;
  } while (n > 0);

  return list;
};

const swap = (list, i, j) => {
  let temp = list[i];
  list[i] = list[j];
  list[j] = temp;
};