const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("#login-input");
const greeting=document.querySelector("#greeting");

const USERNAME_KEY="username"

function onLoginSubmit(event){
    event.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.classList.remove("hidden");
    greeting.innerText=`Nice to meet you ${username}`;
}

const savedUsername=localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);
if (savedUsername===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    paintGreeting(savedUsername);
}

