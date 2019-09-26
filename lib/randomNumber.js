const shuffle = arr => {
  let i = arr.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};

module.exports = function randomNumber() {
  let arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(i);
  }
  return shuffle(arr);
};
