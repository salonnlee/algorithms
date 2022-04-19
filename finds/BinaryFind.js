// 二分查找的非递归实现
function binaryFind(sortedArr, target) {
  if (sortedArr.length === 0) return -1;
  let low = 0;
  let high = sortedArr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (target === sortedArr[mid]) {
      return mid;
    } else if (target < sortedArr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// 二分查找的递归实现
function binaryFindRecursion(sortedArr, target) {
  return binaryFindRecursionInternally(
    sortedArr,
    0,
    sortedArr.length - 1,
    target
  );
}
function binaryFindRecursionInternally(sortedArr, low, high, target) {
  if (low > high) return -1;
  let mid = low + ((high - low) >> 1);
  if (sortedArr[mid] === target) {
    return mid;
  } else if (sortedArr[mid] < target) {
    return binaryFindRecursionInternally(sortedArr, mid + 1, high, target);
  } else {
    return binaryFindRecursionInternally(sortedArr, low, mid - 1, target);
  }
}

// 查找第一个值等于给定值的元素
function binaryFindFirst(sortedArr, target) {
  if (sortedArr.length === 0) return -1;
  let low = 0;
  let high = sortedArr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (target < sortedArr[mid]) {
      high = mid - 1;
    } else if (target > sortedArr[mid]) {
      low = mid + 1;
    } else {
      if (mid === 0 || sortedArr[mid - 1] < target) return mid;
      high = mid - 1;
    }
  }
  return -1;
}

// 查找最后一个值等于给定值的元素
function binaryFindLast(sortedArr, target) {
  if (sortedArr.length === 0) return -1;
  let low = 0;
  let high = sortedArr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (target < sortedArr[mid]) {
      high = mid - 1;
    } else if (target > sortedArr[mid]) {
      low = mid + 1;
    } else {
      if (mid === sortedArr.length - 1 || sortedArr[mid + 1] > target)
        return mid;
      low = mid + 1;
    }
  }
  return -1;
}

// 查找第一个大于等于给定值的元素
function binaryFindFirstBig(sortedArr, target) {
  if (sortedArr.length === 0) return -1;
  let low = 0;
  let high = sortedArr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (target <= sortedArr[mid]) {
      if (mid === 0 || sortedArr[mid - 1] < target) return mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// 查找最后一个小于等于给定值的元素
function binaryFindLastSmall(sortedArr, target) {
  if (sortedArr.length === 0) return -1;
  let low = 0;
  let high = sortedArr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (target < sortedArr[mid]) {
      high = mid - 1;
    } else {
      if (mid === sortedArr.length - 1 || sortedArr[mid + 1] >= target)
        return mid;
      low = mid + 1;
    }
  }
  return -1;
}
