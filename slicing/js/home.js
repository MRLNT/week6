const name = localStorage.getItem("name");
// console.log(name);

const sidebarName = document.getElementById('sidebar-name')
sidebarName.innerHTML = name;

const btnLogout = document.getElementById('btn-logout');

btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "./login.html";
});