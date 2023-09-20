const email = document.getElementById('email')
const password = document.getElementById('password')
const btnLogin = document.getElementById("btn-login")

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value == "") {
        alert("email tidak boleh kosong");
    } else if (password.value == ""){
        alert("password tidak boleh kosong");
    } else {
        if (email.value === localStorage.getItem("email")) {
            if (password.value === localStorage.getItem("password")) {
                alert("success login")
    
                window.location.href = './home.html'
            } else {
                alert("wrong password");
            }
        } else {
            alert("email salah");
        }
    }
    
})