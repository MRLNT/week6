const title = document.getElementById('title');
console.log(title);

// change content
title.innerHTML = "haii";

// change color
title.style.color = "blue";

// get by class name
const container = document.getElementsByClassName('container');
console.log(container);

// query selector
const btnView = document.querySelector(".btn-view")
console.log(btnView);

// function react to event
function showAlert() {
    alert("hallo");
}

// get element button change color
const btnChange = document.querySelector('.btn-change')
const desc1 = document.getElementById('desc1');
// add event listener
btnChange.addEventListener("click", (e) => {
    e.preventDefault();
    desc1.style.color = "coral";
    desc1.style.backgroundColor = "lightblue";
});

const btnHide = document.getElementById("btn-hide");
const logo = document.getElementById('logo');
btnHide.addEventListener("click", (e) => {
    e.preventDefault();
    // if (logo.classList.contains("hide")) {
    //     logo.classList.remove("hide");
    //     btnHide.innerHTML = "Hide Logo";
    // } else {
    //     logo.classList.add("hide");
    //     btnHide.innerHTML = "Show Logo";
    // }

    logo.classList.toggle("hide");
});