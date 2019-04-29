// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
  var result = 1;
  for (var i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }

  if (arguments.length == 0) {
    return 0;
  }
  return result;
}

console.log(multiply(1,2,3));


// 2) Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// reverseString(‘test’) // "tset”.

function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("test"));

// 3) Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // "104 101 108 108 111”
// подсказка: для получения кода используйте специальный метод

function getCodeStringFromText(str) {
  let array = str.split("");
  let newStr = "";

    for (var i = 0; i < str.length; i++) {
      let sum = array[i];
      let uniCode = sum.charCodeAt(sum) + " ";
      newStr += uniCode;
    }

  return newStr;
}

console.log(getCodeStringFromText("hello"));


// 4) Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает "Вы выиграли” если нет то "Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function randomNumber(value) {
  value = prompt("А какое число выберешь ты?");
  let random = Math.floor(Math.random(0, 10)*10);

    if (value == random) {
      return alert("Вы выиграли");
    } else {
      alert("Вы не угадали ваше число " + value + " а выпало число " + random);
    }
}

randomNumber();


// 5) Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(number) {
  let array = [];
  for (i = 0; i < number; i++){
      array[i] = i + 1;
  }
  return array;
}

console.log(getArray(10));



// 6) Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

let newArray = "";

function doubleArray(array) {
  for (var i = 0; i < array.length; i++) {
    return newArray += array + "," + array.slice(0);
  }
}

console.log(doubleArray([1,2,3,4,5,6]));

// 7) Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection(array) {
  array.shift();
  return array;
}

console.log(changeCollection([1,2,3,4,5,6,7]));

// 8) Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// funcGetUsers(users, "gender”, "male”); // [ {name: "Denis”, age: "29”, gender: "male”} , {name: "Ivan”, age: "20”, gender: "male”} ]

let user = [{name: "Denis", age: "29", gender: "male"} , {name: "Ivan", age: "20", gender: "male"}];

function funcGetUsers(users, type, value) {
  if (users !== undefined && type !== undefined && value !== undefined) {
      let newUser = [];
      let number = 0;
      for (i = 0; i < users.length; i++) {
        if (users[i][type] === value) {
        newUser[number++] = users[i];
      }
    }
    return newUser;
  }
}

console.log(funcGetUsers(user,"name","Denis"));
