let startTime, elapsedTime = 0, timerInterval;
const timeDisplay = document.getElementById('timeDisplay');
const lapsContainer = document.getElementById('laps');

// Function to update time
function updateTime() {
    elapsedTime = Date.now() - startTime;
    timeDisplay.textContent = timeToString(elapsedTime);
}

// Convert time to string format including milliseconds
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(3, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Start button event listener
document.getElementById('startBtn').addEventListener('click', () => {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);  // Update every 10ms
    }
});

// Pause button event listener
document.getElementById('pauseBtn').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

// Reset button event listener
document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00:000";
    lapsContainer.innerHTML = '';
});

// Lap button event listener
document.getElementById('lapBtn').addEventListener('click', () => {
    const lapTime = timeToString(elapsedTime);
    const lapElement = document.createElement('div');
    lapElement.textContent = `Lap: ${lapTime}`;
    lapsContainer.appendChild(lapElement);
});
