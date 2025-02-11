let sessionCount = document.getElementById("session-count");
let showTimer = document.getElementById("show-timer");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let breakNegative = document.getElementById("break-neg");
let breakTimer = document.getElementById("break-timer");
let breakPositive = document.getElementById("break-pos");
let sessionNegative = document.getElementById("session-neg");
let sessionTimer = document.getElementById("session-timer");
let sessionPositive = document.getElementById("session-pos");


function timeDecreament(){
    let breakdec = parseInt(breakTimer.innerText);
    if(breakdec==0){
        breakNegative.disabled = true;
    }
    else{
        breakdec--;
        breakTimer.innerText = breakdec;
    }
}
function timeincreament(){
    let inc = parseInt(breakTimer.innerText);
    if(inc>0){
        breakNegative.disabled = false;
    }
    inc++;
    breakTimer.innerText = inc;
}
function sessiontimeDecreament(){
    let sessiondec = parseInt(sessionTimer.innerText);
    if(sessiondec==0){
        sessionNegative.disabled = true;
    }
    else{
        sessiondec--;
        sessionTimer.innerText = sessiondec;
    }
}

function sessiontimeincreament(){
    let sessioninc = parseInt(sessionTimer.innerText);
    if(sessioninc>0){
        sessionNegative.disabled = false;
    }
        sessioninc++;
        sessionTimer.innerText = sessioninc;
}

let interval;
let isSession = true;

function startTimer() {
    let timerValue = parseTime(showTimer.innerText);

    interval = setInterval(() => {
        if (timerValue.minutes === 0 && timerValue.seconds === 0) {
            if (isSession) {
                timerValue = parseTime(breakTimer.innerText);
                isSession = false;
            } else {
                timerValue = parseTime(sessionTimer.innerText);
                isSession = true;
            }
        } else {
            timerValue = decrementTime(timerValue);
        }
        showTimer.innerText = formatTime(timerValue);
    }, 1000);
}

function parseTime(timeString) {
    let [minutes, seconds] = timeString.split(":").map(Number);
    return { minutes, seconds };
}

function decrementTime({ minutes, seconds }) {
    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    return { minutes, seconds };
}

function formatTime({ minutes, seconds }) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


function resettime(){
    // showTimer.innerText="05:00";
    // breakTimer.innerText = "1";
    // sessionTimer.innerText = "5";
    // start.disabled = false;
    // reset.disabled = true;
    clearInterval(interval);
    showTimer.innerText = sessionTimer.innerText
    isSession = true;
}

function starttime(){
    let sessionval = sessionTimer.innerText;
    let breakval = breakTimer.innerText
    console.log(sessionval);
    console.log(breakval);
    // start.disabled = true;
    // reset.disabled = false;

    clearInterval(interval);
    startTimer();
}


start.addEventListener("click",starttime);
reset.addEventListener("click",resettime);
breakNegative.addEventListener("click",timeDecreament);
breakPositive.addEventListener("click",timeincreament);
sessionNegative.addEventListener("click",sessiontimeDecreament);
sessionPositive.addEventListener("click",sessiontimeincreament);