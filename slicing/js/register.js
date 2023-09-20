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
    if (password.value == "") {
        alert("password tidak boleh kosong");
    } else if(email.value == ""){
        alert("Email tidak boleh kosong");
    } else if(username.value == ""){
        alert("Username tidak boleh kosong");
    } else if(fullname.value == ""){
        alert("Nama tidak boleh kosong");
    } else {
        alert("succes register");
        localStorage.setItem("fullname", fullname.value);
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        window.location.href = './login.html';
    }
});