const fullname = localStorage.getItem("fullname");
// console.log(name);

const sidebarName = document.getElementById('sidebar-name')
sidebarName.innerHTML = fullname;

const btnLogout = document.getElementById('btn-logout');

btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "./login.html";
});

// menu side bar
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var wrapper = document.getElementById('wrapper');
    
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.toggle('toggled');
    });
});

// validasi form add data
const title = document.getElementById('input-title')
const url = document.getElementById('input-url')
const desc = document.getElementById('input-desc')
const save = document.getElementById('btn-save')
save.addEventListener('click', (e) => {
    e.preventDefault();
    if(url.value == "" || desc.value == "" || title.value == ""){
        alert("form tidak boleh kosong")
    } else {
        alert("sukes tambah buku");
        window.location.href = './home.html';
    }
});


