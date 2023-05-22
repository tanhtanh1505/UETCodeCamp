# DOM

- <a href='https://www.w3schools.com/js/js_htmldom.asp'>W3School</a>

- <a href='https://jsonplaceholder.typicode.com/'>Sample data for testing</a>

### Todo App Example

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

### <a href='https://www.hackerrank.com/challenges/js10-create-a-button?isFullScreen=true&hr_b=1'> Hackerrank example </a>

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

or

```html
<button id="btn" onclick="( () => this.innerHTML++ )()">0</button>
```

# Debug

- <a href='https://developer.chrome.com/docs/devtools/javascript/'>Chrome</a>

- <a href='https://code.visualstudio.com/docs/editor/debugging'>VSCode</a>
