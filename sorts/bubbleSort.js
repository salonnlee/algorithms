// 冒泡排序
function bubbleSort(arr) {
  if (arr.length <= 1) return;
  for (let i = 0; i < arr.length; i++) {
    let hasChange = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasChange = true;
      }
    }
    if (!hasChange) break;
  }
}
