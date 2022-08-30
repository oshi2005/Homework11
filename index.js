const todoList = [
  { id: 1, value: "Study JavaScript" },
  { id: 2, value: "Study CSS" },
  { id: 3, value: "Study HTML" },
];

/* <li id="item-1" class="todo-item">Study JavaScript</li> */
for (let index = 0; index < todoList.length; index++) {
  const li = document.createElement("li"); // <li></li>
  li.setAttribute("id", "item-" + todoList[index].id); // <li id="item-1"></li>
  li.setAttribute("class", "todo-item"); // <li id="item-1" class="todo-item"></li>
  li.innerHTML = todoList[index].value;

  const ul = document.getElementById("list");
  ul.appendChild(li);
}

function addNewItem() {
  const input = document.getElementById("content");
  const content = input.value;
  const item = { id: todoList.length + 1, value: content };
  todoList.push(item);

  const li = document.createElement("li");
  li.setAttribute("id", "item-" + item.id);
  li.setAttribute("class", "todo-item");
  li.innerHTML = item.value;

  const ul = document.getElementById("list");
  ul.appendChild(li);
  input.value = "";
}

function changeColor() {
  var element = document.body;
  element.classList.toggle("Light");
}