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
