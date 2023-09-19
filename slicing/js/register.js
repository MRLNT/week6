const signup = document.getElementById('signup')
const login = document.getElementById('login')
const fullname = document.getElementById('fullname')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')

login.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "./login.html";
});

signup.addEventListener('click', (e) => {
    e.preventDefault();
    alert("succes register");
    localStorage.setItem("fullname", fullname.value);
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    window.location.href = './login.html';
})