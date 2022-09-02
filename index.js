// const h1 = document.querySelector("div.hello:first-child h1");
const h1 = document.querySelector("div.hello:first-child h1");
const ptag = document.querySelector("div.p");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

console.log(h1)
// h1.innerText = "hello"

// h1.style.color = 'blue'

function handleTitleClick() {
    h1.style.color = "red"
    h1.style.color = "red"
}
function handleMouseEnter() {
    h1.innerHTML = "The mouse is here!";
    h1.style.color = colors[0];
}
function handleMouseLeave() {
    h1.innerHTML = "The mouse is gone!";
    h1.style.color = colors[1];
}
function handleWindowResize() {
    // document.body.style.backgroundColor = "tomato";
    h1.innerHTML = "You just resize!!~"
    h1.style.color = colors[2];
}

function handleWindowCopy() {
    alert("copier!")
}

function handleWindowOffline() {
    alert("Help me wifi")
}
function handleWindowOnline() {
    alert("good")
}
function handleWindowMenu() {
    h1.innerHTML = "That was a right click!"
    h1.style.color = colors[4];

}

function handlePtagClick() {
    const clickedClass = "clicked"
    if (ptag.className === clickedClass) {
        ptag.className = "";
    } else {
        ptag.className = clickedClass;
    }
    // const currentColor = ptag.style.color;
    // let newColor;
    // if (currentColor === "blue") {
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // ptag.style.color = newColor;
}

ptag.addEventListener("click", handlePtagClick);


h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("click", handleTitleClick);


h1.addEventListener("mouseenter", handleMouseEnter);
// h1.onclick = handleTitleClick;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("contextmenu", handleWindowMenu);