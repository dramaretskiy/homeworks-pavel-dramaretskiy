// На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности: [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

let array = [1,2,3,5,8,9,10];
let newArray = [];

array.forEach(function(currentEl) {
  if (currentEl % 2) {
    newArray.push({digit: currentEl, odd: false});
  } else {
    newArray.push({digit: currentEl, odd: true});
  }
});

console.log(newArray);


// 2) Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

let isArray = [12, 4, 50, 1, 18, 40];

function isArrayFunc(currentEl) {
  if (currentEl === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isArray.every(isArrayFunc));

// 3) Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

let arrayString = ["yes", "hello", "no", "easycode", "what"];

function arrayStringFunc(currentEl) {
  if (currentEl.length > 3) {
    return true;
  }
}

console.log(arrayString.some(arrayStringFunc));

// 4) Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

let arrayObject = [ {char:"a",index:12},
                    {char:"w",index:8},
                    {char:"Y",index:10},
                    {char:"p",index:3},
                    {char:"p",index:2},
                    {char:"N",index:6},
                    {char:" ",index:5},
                    {char:"y",index:4},
                    {char:"r",index:13},
                    {char:"H",index:0},
                    {char:"e",index:11},
                    {char:"a",index:1},
                    {char:" ",index:9},
                    {char:"!",index:14},
                    {char:"e",index:7} ];

function arraySortFunc() {
  let newSortArray = arrayObject.sort(function (previous, next) {
    return previous.index - next.index;
  });

  let resultString = arrayObject.reduce(function (sum, currentEl) {
    return sum + currentEl.char;
  }, "");
  return resultString;
}

console.log(arraySortFunc());
