const color = document.querySelector("body");


function handleSizemoved() {
    const movedSize = window.innerWidth;
    // let change = style.backgroundColor = "cornflowerblue"
    if (movedSize <= 600) {
        color.classList.add("small")
        color.classList.remove("midium")
        color.classList.remove("large")
        // color.style.backgroundColor = "cornflowerblue"
        // h1.classList.remove(movedClass)
    } else if (movedSize >= 601 && movedSize < 800) {
        color.classList.remove("small")
        color.classList.remove("large")
        color.classList.add("midium")

        // color.style.backgroundColor = "purple"
    } else {
        color.classList.remove("midium")
        color.classList.add("large")

        // color.style.backgroundColor = "yellow"
    }
}
window.addEventListener("resize", handleSizemoved)

// h1.addEventListener("click", handleTitleClick)


// function handleTitleClick() {
//     h1.classList.toggle("active")
// }
// h1.addEventListener("click", handleTitleClick)