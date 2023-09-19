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