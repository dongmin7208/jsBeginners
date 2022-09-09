const mainForm = document.querySelector("#mainForm")

const guesNum = document.querySelector("#guessNum");
const play = document.querySelector("play");
const guess = document.querySelector("#guess")
const choiceNum = document.querySelector("#machine");
// const choiceNumber = document.querySelector("#choiceNumber");
const result = document.querySelector("#result")

function machine(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber
}


function ClickSubmit(event) {
    event.preventDefault();
    let max = document.getElementById("choiceNumber").value;
    const guessN = Number(guesNum.value);
    const num = machine(0, max);

    guess.innerText = `You chose: ${guessN}`;
    choiceNum.innerText = `the machine chose: ${num}`;

    if (guessN === num) {
        result.innerText = "You won!!"
    } else {
        result.innerText = "you lost!"
    }


}


mainForm.addEventListener("submit", ClickSubmit);