const clock = document.querySelector("h2");

function setTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    clock.innerText = `${hours < 10 ? hours.padStart(2, '0') : hours}:${
                        minutes < 10 ? minutes.padStart(2, '0') : minutes}:${
                        seconds < 10 ? seconds.padStart(2, '0') : seconds}
                        `;
}

function init(){
    setTime();
    //setInterval(setTime, 1000);
}

init();