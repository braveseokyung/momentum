const todoForm=document.querySelector("#todo-form");
const todoInput=todoForm.querySelector("#todo-input");
const todoList=document.querySelector("#todo-list");

const TODOS_KEY="todos";

function paintTodo(todoObj){
    const li=document.createElement("li");
    li.id=todoObj.id;
    const span=document.createElement("span");
    const btn=document.createElement("button");
    span.innerText=todoObj.todo;
    btn.innerText="delete";
    btn.addEventListener("click",onTodoDelete);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
    
}

let todos=[]
const savedTodos=localStorage.getItem(TODOS_KEY);


function loadTodos(){
    if(savedTodos!==null){
        const parsedSavedTodos=JSON.parse(savedTodos);
        todos=parsedSavedTodos;
        console.log(todos);
        parsedSavedTodos.forEach(paintTodo); //아니 여기가 어렵네 todos.forEach는 안됨
    }
}

function saveTodos(todos){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function onTodoSubmit(event){
    event.preventDefault();
    const newTodoId=Date.now();
    const newTodo=todoInput.value;
    const newTodoObj={"id":newTodoId,"todo":newTodo};
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos(todos);

}

function onTodoDelete(event){
    const li=event.target.parentElement;
    li.remove();
    todos=todos.filter(todo=>todo.id!==parseInt(li.id));
    saveTodos(todos);

}

loadTodos();
todoForm.addEventListener("submit",onTodoSubmit);