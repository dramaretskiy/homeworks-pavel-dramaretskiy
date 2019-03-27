// let a = 0 || 'string';
// // В этой переменной выведится строка. Потому что, если привести 0 к boolean, то он выдаст false, а оператор "или" ищет и выводит значение true.
//
// let a = 1 && 'string';
// // Вернёт строку, все операнды истинные, поэтому он возвратит последний.
//
// let a = null || 25;
// // Вернёт число 25, потому что оператор "Или" останавливаеться на значении true, а null - это false.
//
// let a = null && 25;
// // Вернёт null, потому как "И" останавливается на false, а boolean(null) = false.
//
// let a = null || 0 || 35;
// // Вернёт число 35, потому что это единственное значение которое выдаст true.
//
// let a = null && 0 && 35;
// // Вернёт null, потому что null = false.
//
//
// 12 + 14 + '12'
// // Консоль выдаст ответ "2612". Потому что мы не преобразовали строку "12" к числу, это можно сделать с помощью плюса перед строкой.
//
// 3 + 2 - '1'
// // Консоль выдаст ответ 4 и он будет верный. Из-за того что строку нельзя отнимать от чего либо, JS сам поймёт что эму нужно преобразовать строку в число, чтобы можно было отнять.
//
// '3' + 2 - 1
// // Ответ будет 31. JS с самого начала совершит арифметические операции с числами и только после будет прибавлять строку.
//
// true + 2
// // Консоль выведет 3. В JS true считается за 1, это числовое значение.
//
// +'10' + 1
// // Будет 11. Потому как мы привели строку к числу с помощью знака "+".
//
// undefined + 2
// // Консоль выдаст NaN, потому что при преобразовании в число undefined становится NaN.
//
// null + 5
// // Консоль выдаст 5, потому что при преобразовании в число null становится 0.
//
// true + undefined
// // Консоль выдаст NaN, потому что при преобразовании в число undefined становится NaN.



// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
var someVar = "hidden";

if (someVar == "hidden") {
  someVar = "visible";
} else {
  someVar = "hidden";
}

alert(someVar);

// 2. Используя if, записать условие:
//   a. если переменная равна нулю, присвоить ей 1;
//   b. если меньше нуля - строку “less then zero”;
//   c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let someLet = 5;

if (someLet == 0) {
  alert(someLet = 1);
} else if (someLet < 0) {
  alert("less than zero");
} else if (someLet > 0) {
  alert(someLet = someLet * 10);
}

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false
}

if (car.age > 5) {
  console.log("Need Repair");
  car.needRepair = true;
} else {
  console.log("No need to Repair");
  car.needRepair = false;
}

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: "15%"
}

if (item.discount != undefined || null || "") {
  item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) / 100 * parseInt(item.discount));
  console.log(item.priceWithDiscount);
} else if(item.discount) {
  console.log(item.price);
}

// 5. Дан следующий код:
// let product = { name: “Яблоко”, price: “10$” };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
  name: "Яблоко",
  price: "10$"
}

let min = 10;
let max = 20;

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log("Товаров не найдено");
}
