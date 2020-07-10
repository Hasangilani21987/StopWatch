var hour = document.getElementById('hour');
// console.log(hour);
var min = document.getElementById('min');
// console.log(min)
var sec = document.getElementById('sec');
// console.log(sec)
var startbtn = document.getElementById('start');
console.log(startbtn)


var interval;
var minutes = 0;
var seconds = 0;
var hours = 0;

function timer() {
    seconds++
    sec.innerHTML = seconds;
    if (seconds >= 60) {
        minutes++
        min.innerHTML = minutes
        seconds = 0;
    }
    else if (minutes >= 60) {
        hours++
        hour.innerHTML = hours
        minutes = 0;
    }
}

function start() {
    interval = setInterval(timer, 1000);
    startbtn.disabled = true;
}

function stop() {
    clearInterval(interval);
    startbtn.disabled = false
}

function reset() {
    minutes = 0;
    seconds = 0;
    hours = 0;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    hours.innerHTML = hours;
    stop()
    startbtn.disabled = false
}
