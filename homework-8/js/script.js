// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
let button = document.querySelector("#btn-msg");

button.addEventListener("click", () => alert(button.dataset.text));

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
function btnRedInHover() {
    button.classList.add("red");
}

function btnDisable() {
    button.classList.remove("red");
    button.removeAttribute("class");
}

button.addEventListener("mouseover", btnRedInHover);
button.addEventListener("mouseout", btnDisable)

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента. 
let tagElement = document.querySelector("#tag");

document.body.addEventListener("click", (e) => tagElement.textContent = `Tag: ${e.target.tagName}`);

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item +
// порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
let generateBtn = document.querySelector("#btn-generate");
let ulList = document.querySelector("ul");

function addItemToList() {
    let child = ulList.children.length;
    let element = document.createElement("li");
    element.textContent = `Item ${child + 1}`;
    ulList.appendChild(element);
}

generateBtn.addEventListener("click", addItemToList);
