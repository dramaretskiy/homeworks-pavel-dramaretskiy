// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
function isParent(parent, child) {
  if (parent.contains(child)) {
    return true;
  }
  return false;
}

console.log(
  isParent(document.querySelector("ul"), document.querySelector("mark"))
);

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
let links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));

console.log(links);

// 3. Найти элемент, который находится перед и после списка ul
let ul = document.querySelector("ul");

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

// 4. Посчитать количество элементов li в списке
console.log(ul.querySelectorAll("li"));

// 5. В коде с занятия написать функцию по редактированию задачи.

// 6. Подумать и улучшить функцию generateId();
