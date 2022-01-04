// 初始變數
const myTodo = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const done = document.querySelector("#done");
const listContain = document.querySelector("#list-contain");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  myTodo.appendChild(newItem);
}

// Create
addBtn.addEventListener("click", function () {
  //利用trim將字串前後空白移除加上if判斷使輸入結果為空白時不新增todo list
  const inputValue = input.value.trim();
  if (inputValue.length > 0) {
    addItem(inputValue);
    input.value = "";
  }
});
//鍵盤事件監聽器，利用if綁定"Enter"鍵
input.addEventListener("keypress", function (even) {
  const inputValue = input.value.trim();
  if (even.key === "Enter" && inputValue.length > 0) {
    addItem(inputValue);
    //新增後input欄位清空
    input.value = "";
  }
});

// Delete
listContain.addEventListener("click", function (event) {
  const target = event.target;
  let parentElement = target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
  }
});
// Check and move
listContain.addEventListener("click", function (event) {
  const target = event.target;
  let parentElement = target.parentElement;
  if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
    //如果目標在點擊後顯示為check移至done
    if (target.classList.contains("checked")) {
      done.append(parentElement);
      //如果目標在點擊後顯示為" "移至todo
    } else {
      myTodo.append(parentElement);
    }
  }
});
