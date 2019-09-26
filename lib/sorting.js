let merge = function(leftData, rightData) {
  let sortedData = new Array();
  let leftIndex = 0,
    rightIndex = 0;

  // 一一比對leftData和rightData每個元素的大小
  // 將較小者依序填入sortedData
  for (let i = 0; i < leftData.length + rightData.length; i++) {
    //如果leftData已填完, 就填入rightData的資料
    if (leftIndex == leftData.length) sortedData.push(rightData[rightIndex++]);
    //如果rightData已填完, 就填入leftData的資料
    else if (rightIndex == rightData.length)
      sortedData.push(leftData[leftIndex++]);
    // 如果leftData < rightData,則填入leftData的資料
    else if (leftData[leftIndex] < rightData[rightIndex])
      sortedData.push(leftData[leftIndex++]);
    // 如果rightData < leftData,則填入leftData的資料
    else sortedData.push(rightData[rightIndex++]);
  }
  return sortedData;
};

module.exports = function mergeSort(data) {
  if (data.length > 1) {
    // 如果資料超過1筆
    let leftData = new Array(),
      rightData = new Array();
    let middle = parseInt(data.length / 2);

    // 將資料分割成左右子串列
    for (let i = 0; i < middle; i++) leftData[i] = data[i];
    for (let j = middle; j < data.length; j++) rightData[j - middle] = data[j];

    leftData = mergeSort(leftData); // 對左子串列作合併排序
    rightData = mergeSort(rightData); // 對右子串列作合併排序
    return merge(leftData, rightData); // 將左右子串列作完合併的結果合併
  }
  return data; // 如果資料只有1筆,直接回傳
};
