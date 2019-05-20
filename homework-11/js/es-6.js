// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
// function Component(tagName) {
//   this.tagName = tagName || "div";
//   this.node = document.createElement(tagName);
// }
// Пример вызова:
// const comp = new Component("span");


// class Component {
//   constructor(tagName = "div") {
//     this.tagName = tagName;
//     this.node = document.createElement(tagName);
//   }
// }

// const comp = new Component("span");
// console.log(comp);


// 2. Реализовать конструктор и методы в ES6 синтаксисе:
// function Component(tagName) {
//   this.tagName = tagName || "div";
//   this.node = document.createElement(tagName);
// }
// Component.prototype.setText = function(text) {
//   this.node.textContent = text;
// };


class Component {
  constructor(tagName = "div") {
    this.tagName = tagName;
    this.node = document.createElement(tagName);
  }
  setText(text) {
    return (this.node.textContent = text);
  }
}

const comp = new Component("span");
comp.setText = "123";
console.log(comp);


// 3. Создать класс калькулятора который будет принимать стартовое значение
// и у него будут методы сложить, вычесть, умножить , разделить.
// Также у него должны быть геттер и сеттер для получения и установки
// текущего числа с которым производятся вычисления.


class Calculator {
  constructor(startValue) {
    this.startValue = startValue;
  }

  get plus() {
    return this.startValue;
  }

  set plus(plusVal) {
    this.startValue += plusVal;
  }

  get minus() {
    return this.startValue;
  }

  set minus(minusVal) {
    this.startValue -= minusVal;
  }

  get multiply() {
    return this.startValue;
  }

  set multiply(multiVal) {
    this.startValue *= multiVal;
  }

  get division() {
    return this.startValue;
  }

  set division(divisionVal) {
    this.startValue /= divisionVal;
  }
}

const calc = new Calculator(5);

calc.plus = 5;
console.log(calc.plus);
calc.minus = 2;
console.log(calc.minus);
calc.multiply = 3;
console.log(calc.multiply);
calc.division = 2;
console.log(calc.division);
