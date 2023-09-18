const email = document.getElementById('email')
const password = document.getElementById('password')
const btnLogin = document.getElementById("btn-login")

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(email.value);
    // console.log(password.value);

    if (email.value === "marcel@gmail.com") {
        if (password.value === "123") {
            alert("success login")
            window.location.href = './home.html'
        } else {
            alert("wrong password");
        }
    } else {
        alert("email salah");
    }
})