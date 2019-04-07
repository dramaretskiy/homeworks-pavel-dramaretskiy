// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
// callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity” firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,” firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
// Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки

let arrString = ["my", "name", "is", "Trinity"];
let arrNumber = [10, 20, 30];
let arrObject = [{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}];
let arrInvert = ["abc", "123"];

function newResultFunc(array, callback) {
  return "New value: " + callback(array);
}


function arrStringFunc(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }
  string = array.join("");
  return string;
}

function arrNumberFunc(array) {
  return array.map(function(currentEl) {
    return currentEl * 10;
  });
}

function arrObjectFunc(array) {
  return array.map(function(currentEl) {
    return currentEl.name + " is " + currentEl.age;
  });
}

function arrInvertFunc(array) {
  return array.map(function(currentEl) {
    let length = currentEl.length;
		let newArray = [];
    while (length--) {
      newArray += currentEl[length];
    }
    return newArray;
  })
}

console.log(newResultFunc(arrNumber, arrNumberFunc));
console.log(newResultFunc(arrString, arrStringFunc));
console.log(newResultFunc(arrObject, arrObjectFunc));
console.log(newResultFunc(arrInvert, arrInvertFunc));

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

let arrNumberDist = [222, 777, 555, 111, 333, 888];

function everyFunc(array, callback) {
  let arrLen = array.length;
  let callLen = callback.length;
  if (arrLen === callLen) {
    return true;
  } else {
    return false;
  }
}

function arrNumberDistFunc(array) {
  let arrTrue = [];
  let arrFalse = [];
  let boolean = array.forEach(function(currentEl) {
    if (currentEl > 5) {
      arrTrue.push(currentEl);
    } else {
      arrFalse.push(currentEl)
    }
  });
  return arrTrue;
}

console.log(everyFunc(arrNumberDist, arrNumberDistFunc(arrNumberDist)));
