

const newYears = '1 Jan 2021';

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const total_milli_seconds = new Date(newYearsDate - currentDate);

    const days = Math.floor(total_milli_seconds / 1000 / 60 / 60 / 24);

    const hours = Math.floor(total_milli_seconds/ 1000/ 60/ 60) % 24;

    const minutes = Math.floor(total_milli_seconds/ 1000/ 60) % 60;

    const seconds = Math.floor(total_milli_seconds/ 1000) % 60;

    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    console.log(hours);

}

setInterval(countdown, 1000); //wtf


countdown();



/*
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2021";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

*/