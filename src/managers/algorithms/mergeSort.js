export const mergeSort = list => {
  let n = list.length;

  if (n <= 1) {
    return list;
  }

  let left = [];
  let right = [];
  for (let i = 0; i < n; ++i) {
    if (i < n / 2) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }
  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  if (left.length > 0) {
    result = result.concat(left);
  }
  if (right.length > 0) {
    result = result.concat(right);
  }
  return result;
};
