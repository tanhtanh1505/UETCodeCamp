https://www.w3schools.com/js/js_htmldom.asp

https://jsonplaceholder.typicode.com/

https://www.hackerrank.com/challenges/js10-create-a-button?isFullScreen=true&hr_b=1

```js
const btn = document.createElement("button");
let count = 0;
btn.innerHTML = count;

btn.addEventListener("click", () => {
  count += 1;
  btn.innerHTML = count;
  console.log(count);
});

const listBtn = document.getElementById("list-btn");
listBtn.appendChild(btn);
```

```js
<button id="btn" onclick="( () => this.innerHTML++ )()">
  0
</button>
```

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
