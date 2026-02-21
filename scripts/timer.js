/**
 * Handles the timer logic.
 * Keeps track of time remaining and interval state.
 */
export default class Timer {
    /**
     * @param {number} initialSeconds - The starting time in seconds.
     * @param {function} onTick - Callback function called every second with remaining time.
     * @param {function} onFinish - Callback function called when the timer reaches zero.
     */
    constructor(initialSeconds, onTick, onFinish) {
        this.initialSeconds = initialSeconds;
        this.remainingSeconds = initialSeconds;
        this.onTick = onTick;
        this.onFinish = onFinish;
        this.intervalId = null;
        this.isRunning = false;
    }

    start() {
        if (this.isRunning) return;

        this.isRunning = true;
        this.intervalId = setInterval(() => {
            if (this.remainingSeconds > 0) {
                this.remainingSeconds--;
                this.onTick(this.remainingSeconds);
            } else {
                this.stop();
                this.onFinish();
            }
        }, 1000);
    }

    pause() {
        if (!this.isRunning) return;
        
        this.stop();
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isRunning = false;
    }

    reset() {
        this.stop();
        this.remainingSeconds = this.initialSeconds;
        this.onTick(this.remainingSeconds);
    }
}
