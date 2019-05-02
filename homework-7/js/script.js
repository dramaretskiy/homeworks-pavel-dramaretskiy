// ================================
// ================================
// ====== Задачи со слайда 6 ======
// ================================
// ================================


// 1. Найти параграф и получить его текстовое содержимое (только текст!)
let paragraph = document.querySelector("p");

console.log(paragraph.textContent);


// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
// (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
function infoDom(element) {
  return {
    type: element.nodeType,
    name: element.tagName,
    child: element.children
  };
}

console.log(infoDom(paragraph));


// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка:
// getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
let ul = document.querySelector("ul");
let result = [];

function getTextFromUl(list) {
  let a = list.querySelectorAll("li a");
  for (let i = 0; i < a.length; i++) {
    let element = a[i];
    result.push(element.textContent);
  }
  return result;
}

console.log(getTextFromUl(ul));


// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
let child = document.querySelector("p").childNodes;

for (let i = 0; i < child.length; i++) {
  let element = child[i];

  if ((element.nodeType = 3)) {
    element.textContent = "-text-";
  }
}

// ================================
// ================================
// ===== Задачи со слайда 11 ======
// ================================
// ================================


// 1. Найти в коде список ul и добавить класс “list”
let ulList = document.querySelector("ul");

ulList.classList.add("list");


// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let link = document.body.lastElementChild;

link.previousElementSibling.setAttribute("id", "link");


// 3. На li через один (начиная с самого первого) установить класс “item”
let li = ulList.children;

for (let i = 0; i < li.length; i++) {
  let element = li[i];
  if (i % 2 == 0) {
    element.classList.add("item");
  }
}


// 4. На все ссылки в примере установить класс “custom-link”
let allLinks = document.links;

for (let i = 0; i < allLinks.length; i++) {
  let element = allLinks[i];
  element.classList.add("custom-link");
}

// ================================
// ================================
// ==== Задачи со слайда 17-18 ====
// ================================
// ================================


// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
let numberLi = ulList.children.length;
let newFragment = document.createDocumentFragment();

for (let i = 1; i < 3; i++) {
  let item = document.createElement("li");
  item.className = "new-item";
  item.innerText = "item";
  newFragment.appendChild(item);
  item.textContent = `link ${numberLi + i}`;
}

ulList.appendChild(newFragment);


// 2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).
let linkS = document.querySelectorAll("ul li a");

for (let i = 0; i < linkS.length; i++) {
  let element = linkS[i];
  element.insertAdjacentHTML("beforeend", "<strong></strong>");
}


// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
let img = document.createElement("img");

img.setAttribute("src", "img/image.jpg");
img.setAttribute("alt", "picture");
document.body.insertBefore(img, document.body.firstChild);


// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let mark = document.querySelector("mark");

mark.insertAdjacentHTML("beforeend", "green");
mark.classList.add("green");


// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let listLi = ulList.querySelectorAll("li");
let liArray = Array.from(listLi);
let fragment = document.createDocumentFragment();

liArray.reverse();

for (let i = 0; i < liArray.length; i++) {
  let element = liArray[i];
  let a = document.createElement("li");
  a = liArray[i];

  fragment.appendChild(a);
}

ulList.textContent = "";
ulList.appendChild(fragment);
