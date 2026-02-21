/**
 * Handles UI updates and DOM manipulation.
 */

const elements = {
    timerDisplay: document.getElementById('timer'),
    startButton: document.getElementById('start'),
    pauseButton: document.getElementById('pause'),
    resetButton: document.getElementById('reset'),
};

/**
 * Formats seconds into HH:MM:SS string.
 * @param {number} seconds 
 * @returns {string} Formatted time string
 */
function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    
    return [
        h.toString().padStart(2, '0'),
        m.toString().padStart(2, '0'),
        s.toString().padStart(2, '0')
    ].join(':');
}

/**
 * Updates the timer display with the formatted time.
 * @param {number} seconds 
 */
export function updateTimerDisplay(seconds) {
    elements.timerDisplay.textContent = formatTime(seconds);
}

/**
 * Updates the state of the control buttons.
 * @param {boolean} isRunning 
 */
export function updateControlsState(isRunning) {
    if (isRunning) {
        elements.startButton.disabled = true;
        elements.pauseButton.disabled = false;
    } else {
        elements.startButton.disabled = false;
        elements.pauseButton.disabled = true;
    }
}

/**
 * Attaches event listeners to buttons.
 * @param {object} handlers - Object containing handler functions for start, pause, reset.
 */
export function bindEvents({ onStart, onPause, onReset }) {
    elements.startButton.addEventListener('click', onStart);
    elements.pauseButton.addEventListener('click', onPause);
    elements.resetButton.addEventListener('click', onReset);
}
