'use strict'
function timer({ deadline, days, hours, minutes, seconds }) {

    function getRemainingTime() {
        let days, hours, minutes, seconds;

        const currentTime = new Date().getTime()
        const endTime = new Date(deadline).getTime();
        const time = endTime - currentTime;

        if (time <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(time / (1000 * 60 * 60 * 24));
            hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((time / (1000 * 60)) % 60)
            seconds = Math.floor((time / 1000) % 60);
        }

        return { days, hours, minutes, seconds }
    }

    function updateClock() {
        const time = getRemainingTime();

        for (let key in time) {
            if (time[key] < 10) {
                time[key] = `0${time[key]}`
            }
        }

        const callElem = (selector) => document.querySelector(selector);

        callElem(days).innerHTML = time.days;
        callElem(hours).innerHTML = time.hours;
        callElem(minutes).innerHTML = time.minutes;
        callElem(seconds).innerHTML = time.seconds;
    }

    setInterval(updateClock, 1000)
}

export default timer;