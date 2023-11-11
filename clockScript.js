// All Variable Declarations

let minutes = 0;
let second = 0;
let tens = 0;
let appandMinutes = document.getElementById('minutes');
let appandSeconds = document.getElementById('seconds');
let appandTens = document.getElementById('tens');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let Interval;

// Start Timer Function 
const startTimer = () => {
    // On start increase tens by 1 
    tens++;
    if (tens <= 9) {
        appandTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        appandTens.innerHTML = tens;
    }

    // Seconds Count Increase after 100 tens 
    if (tens > 99) {
        second++;
        appandSeconds.innerHTML = "0" + second;
        tens = 0;
        appandTens.innerHTML = '0' + tens;
    }

    if (second > 9) {
        appandSeconds.innerHTML = second;
    }

    // Minutes Count Increase after 60 seconds 
    if (second > 59) {
        minutes++;
        appandMinutes.innerHTML = '0' + minutes;
        second = 0;
        appandSeconds.innerHTML = "0" + second;
        tens = 0;
        appandTens.innerHTML = '0' + tens;
    }

    if (minutes > 9) {
        appandMinutes.innerHTML = minutes;
    }
}

// Start Button Action 
startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

// Stop Button Action 
stopBtn.onclick = () => {
    clearInterval(Interval);
}

// Reset Button Action 
resetBtn.onclick = () => {
    clearInterval(Interval);
    tens = '00';
    second = '00';
    minutes = '00';
    appandTens.innerHTML = tens;
    appandSeconds.innerHTML = second;
    appandMinutes.innerHTML = minutes;
}