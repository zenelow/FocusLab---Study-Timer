import Timer from './timer.js';
import * as UI from './ui.js';

// Configuration
const DEFAULT_TIME = 25 * 60; // 25 minutes in seconds

// Initialize Timer
const timer = new Timer(
    DEFAULT_TIME,
    (remainingTime) => {
        UI.updateTimerDisplay(remainingTime);
    },
    () => {
        UI.updateControlsState(false);
        alert('Time is up!');
    }
);

// Event Handlers
const handleStart = () => {
    timer.start();
    UI.updateControlsState(true);
};

const handlePause = () => {
    timer.pause();
    UI.updateControlsState(false);
};

const handleReset = () => {
    timer.reset();
    UI.updateControlsState(false);
};

// Initialize App
function init() {
    // Set initial display
    UI.updateTimerDisplay(DEFAULT_TIME);
    UI.updateControlsState(false);

    // Bind events
    UI.bindEvents({
        onStart: handleStart,
        onPause: handlePause,
        onReset: handleReset
    });
}

// Start the application
init();
