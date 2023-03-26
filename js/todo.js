const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");

//(=document.querySelector(#"todo-form input"))
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement; //event발생 시 해당 객체를 지정하여 그것의 부모태그를 지정ㅋㅋ
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  li.remove();
}
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  console.log(li.id);
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = " X";
  button.addEventListener("click", deleteTodo);
  span.innerText = newTodo.text;
  li.appendChild(span);
  li.appendChild(button); //(li가span이라는 자식을 갖게 된 것임)

  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // toDoInput.value의 값을 변수에 저장한것임(인풋 값 저장하는방법!)

  toDoInput.value = "";
  const newTOdoObj = { text: newTodo, id: Date.now() };
  toDos.push(newTOdoObj);
  paintTodo(newTOdoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
