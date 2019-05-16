// 1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0

function minus(firstArgument) {
  return function(secondArgument) {
    return firstArgument - secondArgument;
  };
}

console.log(minus(5)(6));

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(firstArg) {
  firstArg = firstArg || 1;
  return function(secondArg) {
    let result = firstArg * secondArg;
    firstArg = result;
    return result;
  };
}

const multiply = multiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

// 3. Реализовать модуль, который работает со строкой и имеет методы:
//      a. установить строку
//          i. если передано пустое значение, то установить пустую строку
//          ii. если передано число, число привести к строке
//      b. получить строку
//      c. получить длину строки
//      d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); ‘abcde’
// модуль.получитьДлину(); // 5

const stringModule = (function() {
  let string = "";

  function setString(text) {
    string = text;
    if (Number(text) === text) {
      string = String(text);
    }
  }

  function getString() {
    return string;
  }

  function getStringLength() {
    return string.length;
  }

  function getStringShifter() {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
      result += string[i];
    }
    return (string = result);
  }

  return {
    setString,
    getString,
    getStringLength,
    getStringShifter
  };
})();

stringModule.setString("abcde");
console.log(stringModule.getString());
console.log(stringModule.getStringLength());
console.log(stringModule.getStringShifter());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calcModule = (function() {
  let value = 0;

  function setValue(newValue) {
    if (typeof newValue !== "number") return "Передайте число";
    value = newValue;
    return this;
  }

  function plus(valuePlus) {
    if (typeof valuePlus !== "number") return "Передайте число";
    value += valuePlus;
    return this;
  }

  function minus(valueMinus) {
    if (typeof valueMinus !== "number") return "Передайте число";
    value -= valueMinus;
    return this;
  }

  function division(valueDivision) {
    if (typeof valueDivision !== "number") return "Передайте число";
    value /= valueDivision;
    return this;
  }

  function multiply(valueMultiply) {
    if (typeof valueMultiply !== "number") return "Передайте число";
    value *= valueMultiply;
    return this;
  }

  function exponent(valueExponent){
    if (typeof valueExponent !== 'number') return 'Передайте число';
    value = Math.pow(value,valueExponent);
    return this;
}

  function getValue() {
    return +value.toFixed(2);
  }

  return {
    setValue,
    plus,
    minus,
    division,
    multiply,
    exponent,
    getValue
  };
})();

console.log(
  calcModule
    .setValue(10)
    .plus(5)
    .multiply(2)
    .minus(5)
    .division(2)
    .exponent(2)
    .getValue()
);
