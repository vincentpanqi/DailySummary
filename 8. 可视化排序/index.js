const sourceData = [3, 5, 1, 2, 5, 7, 4, 3, 9, 2, 3, 2, 5, 6];

function generateStaticHTML(arr) {
  let str = '';
  arr.forEach((item) => {
    str = `${str}<div style="height: ${item * 10}%;">${item}</div>`;
  });
  return str;
}

function* bubbleSort(arr) {
  const tempArr = [...arr];
  for (let i = 0; i < tempArr.length; i++) {
    for (let j = i + 1; j < tempArr.length; j++) {
      if (tempArr[i] > tempArr[j]) {
        [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
        yield tempArr;
      }
    }
  }
}
window.onload = () => {
  const mainBox = document.getElementById('main');
  const strHTML = generateStaticHTML(sourceData);
  mainBox.innerHTML = strHTML;
  let genArr;
  document.addEventListener('click', (event) => {
    switch (event.target.id) {
      case 'bubblesort': {
        if (event.target.innerHTML === '冒泡排序(重置)') {
          mainBox.innerHTML = generateStaticHTML(sourceData);
          event.target.innerHTML = '冒泡排序';
          genArr = null;
          break;
        }
        if (!genArr) {
          genArr = bubbleSort(sourceData);  // 初始化生成器
        }
        const newArr = genArr.next().value;
        if (newArr) {
          event.target.innerHTML = '冒泡排序(下一步)';
          mainBox.innerHTML = generateStaticHTML(newArr);
        } else {
          event.target.innerHTML = '冒泡排序(重置)';
        }
        break;
      }
      default: break;
    }
  });
};
