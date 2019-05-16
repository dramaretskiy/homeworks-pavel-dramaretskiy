// 1. Создать конструктор для производства автомобилей.
// Конструктор должен принимать марку автомобиля и возраст машины.
// Конструктор должен иметь метод, который возвращает марку, и второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2017 (2019-2);
// Марка машины всегда должна возвращаться с большой буквы!

function Car(model, year) {
  this.getModel = function() {
    newModel =
      model.substring(0, 1).toUpperCase() + model.substring(1, model.length);
    return newModel;
  };

  this.getYear = function() {
    let date = new Date();
    currentDate = date.getFullYear();
    return currentDate - year;
  };
}

let lexus = new Car("lexus", 2);
console.log(lexus.getModel());
console.log(lexus.getYear());

// 2. Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод).
// Конструктор при инициализации получает строку и имеет следующие методы:
// a. показать оригинальную строку
// b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.

function Coder(string) {
  this.string = string;
  this.getString = function() {
    return this.string;
  };
  this.getEncryptedString = function() {
    return this.string
      .split("")
      .reverse()
      .join("");
  };
}

var cod = new Coder("Hello world!");

console.log(cod.getString());
console.log(cod.getEncryptedString());
