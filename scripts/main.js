import Timer from './timer.js';
import * as UI from './ui.js';

// Configuration
const MODES = {
    focus: 25 * 60,
    short: 5 * 60,
    long: 15 * 60
};

let currentMode = 'focus';

// Initialize Timer
const timer = new Timer(
    MODES[currentMode],
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

const handleModeChange = (mode) => {
    if (currentMode === mode) return;
    
    currentMode = mode;
    timer.setDuration(MODES[mode]);
    UI.setActiveMode(mode);
    UI.updateControlsState(false);
};

// Initialize App
function init() {
    // Set initial display
    UI.updateTimerDisplay(MODES[currentMode]);
    UI.setActiveMode(currentMode);
    UI.updateControlsState(false);

    // Bind events
    UI.bindEvents({
        onStart: handleStart,
        onPause: handlePause,
        onReset: handleReset,
        onModeChange: handleModeChange
    });
}

// Start the application
init();
