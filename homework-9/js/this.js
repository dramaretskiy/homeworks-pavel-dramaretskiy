// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};
// debugger;

const rectangle = {
  width: 5,
  height: 5,
  getSquare: function() {
    return this.width * this.height;
  }
};

console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка,
// а также два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//   price: 10,
//   discount: "15%"
// };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
  price: 10,
  discount: "15%",
  getPrice: function() {
    return this.price;
  },
  getPriceWithDiscount: function() {
    const newPrice = this.price;
    const newDiscount = this.discount;
    return newPrice - (newPrice / 100) * parseInt(newDiscount);
  }
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

// 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”.
// Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const object = {
  height: 10,
  incHeight: function() {
    return ++this.height;
  }
};

console.log(object.incHeight());

// 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//   value: 1,
//   double: function() {},
//   plusOne: function() {},
//   minusOne: function() {}
// };
// numerator
//   .double()
//   .plusOne()
//   .plusOne()
//   .minusOne();
// numerator.value; // 3

const numerator = {
  value: 1,
  double: function() {
    this.value = this.value * 2;
    return this;
  },
  plusOne: function() {
    this.value = this.value + 1;
    return this;
  },
  minusOne: function() {
    this.value = this.value - 1;
    return this;
  }
};
numerator.double().plusOne().plusOne().minusOne();

console.log(numerator.value);

// ====================
// ====================
// ===This (2 часть)===
// ====================
// ====================

// 1. Создать объект с розничной ценой и количеством продуктов.
// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const retailProducts = {
  price: "5$",
  number: 10,
  getTotalCost: function() {
    return parseInt(this.price) * this.number;
  }
};

console.log(retailProducts.getTotalCost());

// 2. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь.
// Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
// Для этого “позаимствуйте” метод из предыдущего объекта.

const retailDetails = {
  price: "10$",
  number: 100
};

console.log(retailProducts.getTotalCost.call(retailDetails));

// 3. Даны объект и функция:
// let sizes = { width: 5, height: 10 },
//   getSquare = function() {
//     return this.width * this.height;
//   };
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

let sizes = { width: 5, height: 10 },
  getSquare = function() {
    return this.width * this.height;
  };

console.log(getSquare.call(sizes));

// 4.
// let element = {
//   height: 25,
//   getHeight: function() {
//     return this.height;
//   }
// };
// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined
// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

let element = {
  height: 25,
  getHeight: function() {
    return this.height;
  }
};
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());
