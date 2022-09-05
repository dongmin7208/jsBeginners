
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick(event) {
    event.preventDefault();
    const value = loginInput.value;
    if (value === "") {
        alert("お名前 write!")
    } else if (value.length > 15)
        console.log("your name is too long~~")
}
loginButton.addEventListener("click", onLoginBtnClick)