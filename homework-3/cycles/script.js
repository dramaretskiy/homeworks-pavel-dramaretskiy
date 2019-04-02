// 1) На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

var string = "i am in the easycode";
var space = "";

for (var i = 0; i < string.length; i++) {
  if(i === 0) {
    space += string[i].toUpperCase();
  }
  space += (string[i - 1] === ' ') ? string[i].toUpperCase() : i!== 0 ? string[i] : '';
}

console.log(space);

// 2) Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

var a = "tseb eht ma i";
var b = "";

for (var i = a.length - 1; i >=0; i--) {
  b += a[i];
}

console.log(b);

// 3) Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

var n = 10;
var result = 1;

for (var i = 1; i <=n; i++) {
  result *= i;
}

console.log(result);

// 4) На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

var c = "JavaScript is a pretty good language";
var d = "";

for (var i = 0; i < c.length; i++) {
  d += (c[i - 1] === " ") ? c[i].toUpperCase() : c[i];
  d = d.split(' ').join('');
}
console.log(d);

// 5) Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of array) {
  if (value % 2) {
    console.log(value);
  }
}

// Дан объект:
// let list = {name: ‘denis’, work: ‘easycode’, age: 29}
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

var list = {
  name: "denis",
  work: "easycode",
  age: 29
};

for (var prop in list) {
  if (typeof(list[prop]) === "string") {
    list[prop] = list[prop].toUpperCase();
    console.log(list[prop]);
  }
}
