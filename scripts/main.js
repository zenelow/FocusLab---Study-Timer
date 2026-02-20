const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let timerInterval;
let totalSeconds = 25 * 60; // 25 minutes default
let isRunning = false;

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    
    // Format: HH:MM:SS
    return [
        h.toString().padStart(2, '0'),
        m.toString().padStart(2, '0'),
        s.toString().padStart(2, '0')
    ].join(':');
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(totalSeconds);
}

function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    updateControlsState();
    
    timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            updateControlsState();
            alert('Time is up!'); // Optional: replace with a sound or visual cue later
        }
    }, 1000);
}

function pauseTimer() {
    if (!isRunning) return;
    
    clearInterval(timerInterval);
    isRunning = false;
    updateControlsState();
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    totalSeconds = 25 * 60;
    updateDisplay();
    updateControlsState();
}

function updateControlsState() {
    if (isRunning) {
        startButton.disabled = true;
        pauseButton.disabled = false;
    } else {
        startButton.disabled = false;
        pauseButton.disabled = true;
    }
}

// Event Listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize
updateDisplay();
updateControlsState();
