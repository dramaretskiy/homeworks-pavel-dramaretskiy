// 1. Есть класс Planet
// function Planet(name) {
//   this.name = name;
//   this.getName = function() {
//     return "Planet name is " + this.name;
//   };
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite
// и будет принимать, кроме name, название спутника (satelliteName).
// Переопределите метод getName для PlanetWithSatellite так,
// чтобы он возвращал ту же самую строчку + дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite("earth", "moon");
// earth.getName(); // 'Planet name is earth. The satellite is moon’

function Planet(name) {
  this.name = name;
  this.getName = function() {
    return "Planet name is " + this.name;
  };
}

function PlanetWithSatellite(name, satelliteName) {
  Planet.call(this, name);
  const previousGetName = this.getName;
  this.satelliteName = satelliteName;
  this.getName = function() {
    return (
      previousGetName.call(this) +
      ". " +
      "The satellite is " +
      this.satelliteName
    );
  };
}

PlanetWithSatellite.prototype = Object.create(Planet.prototype);
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

const earth = new PlanetWithSatellite("earth", "moon");
console.log(earth.getName());

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей,
// метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
// У жилого дома появится свойство “количество квартир на этаже”,
// а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
// У торгового центра появится свойство “количество магазинов на этаже”,
// а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

class Build {
  constructor(name, floors) {
    this.name = name;
    this.floors = floors;
  }

  get numberOfFloors() {
    return this.floors;
  }

  set numberOfFloors(value) {
    this.floors = value;
  }
}

class House extends Build {
  constructor(name, floors, quantityApartments) {
    super(name, floors);
    this.quantityApartments = quantityApartments;
  }

  get numberOfFloors() {
    return {
      Floors: this.floors,
      Apartments: this.floors * this.quantityApartments
    };
  }
}

class Mall extends Build {
  constructor(name, floors, quantityStores) {
    super(name, floors);
    this.quantityStores = quantityStores;
  }
  get numberOfFloors() {
    return {
      Floors: this.floors,
      Stores: this.floors * this.quantityStores
    };
  }
}

const house = new House("Moscow City", 5, 10);
const mall = new Mall("Dubai Mall", 3, 30);

console.log(house.numberOfFloors);
console.log(mall.numberOfFloors);

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена”
// и методом “получить информацию” (метод должен вывести имя и цену).
// Метод должен быть объявлен с помощью прототипов (Func.prototype...).
// Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и “Мебель для дома”.
// Придумайте им по одному свойству, которые будут характерны только для этих экземпляров
// (например, для офисной мебели - наличие компьютерного стола или шредера).
// Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

class Furniture {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

Furniture.prototype.getInformation = function() {
  return {
    name: this.name,
    price: this.price
  };
};

class OfficeFurniture extends Furniture {
  constructor(name, price, availabilityShredder = true) {
    super(name, price);
    this.availabilityShredder = availabilityShredder;
  }

  getInformation() {
    return {
      name: this.name,
      price: this.price,
      new: this.availabilityShredder
    };
  }
}

class HomeFurniture extends Furniture {
  constructor(name, price, availabilityShelves = false) {
    super(name, price);
    this.availabilityShelves = availabilityShelves;
  }

  getInformation() {
    return {
      name: this.name,
      price: this.price,
      new: this.availabilityShelves
    };
  }
}

const furniture = new Furniture("Sofa", "1000$");
const officeFurniture = new OfficeFurniture("Workplace", "2000$");
const homeFurniture = new HomeFurniture("Сloset", "500$", false);

console.log(furniture.getInformation());
console.log(officeFurniture.getInformation());
console.log(homeFurniture.getInformation());

// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации”
// и методом “получить информацию” (метод должен вывести имя и дату регистрации).
// Метод должен быть объявлен с помощью прототипов (Func.prototype...)
// Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например),
// содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию”
// должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

class User {
  constructor(name, dateRegistration) {
    this.name = name;
    this.dateRegistration = dateRegistration;
  }
}

User.prototype.getInformation = function() {
  return {
    name: this.name,
    dateRegistration: this.dateRegistration
  };
};

class Admin extends User {
  constructor(...args) {
    super(...args);
  }

  get superAdmin() {
    const superAdmin = true;
    return superAdmin ? "admin" : "user";
  }
}

Admin.prototype.getInformation = function() {
  return {
    name: this.name,
    dateRegistration: this.dateRegistration,
    status: admin.superAdmin
  };
};

class Guest extends User {
  constructor(name, dateRegistration, validDate) {
    super(name, dateRegistration);
    this.validDate = validDate;
  }

  createDate() {
    this.startDate = new Date(this.validDate);
    this.endDate = new Date(this.validDate);
    this.endDate.setDate(this.endDate.getDate() + 7);
    this.localestr = this.endDate.toLocaleDateString();

    return this.localestr;
  }
}

Guest.prototype.getInformation = function() {
  return {
    name: this.name,
    dateRegistration: this.dateRegistration,
    validDate: guest.createDate()
  };
};

const user = new User("Pasha", "06.06.2019");
const admin = new Admin("Pasha", "07.06.2019");
const guest = new Guest("Pasha", "07.06.2019", "06.07.2019");

console.log(user.getInformation());
console.log(admin.getInformation());
console.log(guest.getInformation());
