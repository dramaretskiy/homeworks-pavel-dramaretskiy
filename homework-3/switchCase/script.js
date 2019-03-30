// 1. Записать в виде switch case следующее условие:
// if (a === "block") {
//   console.log("block");
// } else if (a === "none") {
//   console.log("none");
// } else if (a === "inline") {
//   console.log("inline");
// } else {
//   console.log("other");
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

var a = prompt("Что хотите получить?", "block");

switch (a) {
  case "block":
    console.log("block");
    break;

  case "none":
    console.log("none");
    break;

  case "inline":
    console.log("inline");
    break;

  default:
    console.log("other");
}

// Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного
// оператора.

// 1) Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

var someVar = prompt("Чему равна переменная?", "hidden");

switch (someVar) {
  case "hidden":
    someVar = "visible";
    console.log(someVar);
    break;

  default:
    someVar = "hidden";
    console.log(someVar);
}

// 2) Используя switch case, записать условие:
//   a. если переменная равна нулю, присвоить ей 1;
//   b. если меньше нуля - строку “less then zero”;
//   c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

var number = 6;

switch (true) {
  case 0:
    number = 1;
    console.log(number);
  break;

  case (number < 0):
    number = "less then zero";
    console.log(number);
    break;

  case (number > 0):
    number = number * 10;
    console.log(number);
    break;
}

// 3) Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false
};

switch (true) {
  case (car.age > 5):
    console.log("Need Repair");
    car.needRepair = true;
    break;

  default:
    car.needRepair = false;
    console.log("Not Need Repair");
}
