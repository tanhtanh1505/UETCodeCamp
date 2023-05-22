## <a href='https://www.w3schools.com/js/js_htmldom.asp'>W3School</a>

## <a href='https://jsonplaceholder.typicode.com/'>Sample data for testing</a>

## Todo App

```html
<div id="todo-list"></div>
<div id="form-todo">
  <input id="content" type="text" id="todo" />
  <button id="add-todo">Add</button>
</div>
```

```js
const addBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

const content = document.getElementById("content");

addBtn.addEventListener("click", () => {
  const todoItem = document.createElement("li");
  todoItem.innerText = content.value;
  todoList.appendChild(todoItem);
});
```

## <a href='https://www.hackerrank.com/challenges/js10-create-a-button?isFullScreen=true&hr_b=1'> Hackerrank example </a>
