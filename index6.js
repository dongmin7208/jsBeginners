

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const christmas = new Date("2022-12-25 00:00:00+0900");
    const minus = christmas - date;
    const d = Math.floor((minus / (1000 * 60 * 60 * 24)));
    const h = Math.floor((minus / (1000 * 60 * 60) % 24));
    const m = Math.floor((minus / (1000 * 60) % 60));
    const s = Math.floor((minus / (1000) % 60));

    clock.innerText = `${d}d${h}h${m}m${s}s`;
}

getClock();
setInterval(getClock, 1000);