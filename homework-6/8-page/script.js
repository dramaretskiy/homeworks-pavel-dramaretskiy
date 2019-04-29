// Зная структуру html, с помощью изученных методов получить (в консоль):
// 1. head
console.log(document.head);

// 2. body
let bodyElement = document.body;
console.log(bodyElement);

// 3. все дочерние элементы body и вывести их в консоль.
console.log(bodyElement.children);

// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
console.log(bodyElement.firstElementChild.children);

// б) вывести в консоль все дочерние узлы, кроме первого и последнего
let element = document.body.firstElementChild;

while((element = element.nextElementSibling) && element.nextElementSibling){
  console.log(element);
}

