const startButton = document.getElementById('start');
const stopButton = document.querySelector("#stop");
const resetButton = document.getElementById('reset');
const displayTimeDiv = document.getElementById('time');

let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning;
let stop = false;


const startWatch = () => {
    if(stop) {
        return;
    }
    seconds += 1;
    if(seconds === 60) {
        minutes += 1;
        seconds = 0;
    }
    if(minutes === 60) {
        hours += 1;
        minutes = 0;
    }
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    displayTimeDiv.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

startButton.onclick = () => {
    stop = false;
    isRunning = setInterval(startWatch, 1000);
}

stopButton.addEventListener('click', () => {
    stop = true;
    clearInterval(isRunning);
});

resetButton.onclick = () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTimeDiv.innerText = `0${hours}:0${minutes}:0${seconds}`;
    stop = true;
    clearInterval(isRunning);
}