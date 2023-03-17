
const hoursOfOperation = {
    Monday: {
        open: "10",
        close: "10"
    },
    Tuesday: {
        open: "10",
        close: "10"
    },
    Wednesday: {
        open: "10",
        close: "10"
    },
    Thursday: {
        open: "10",
        close: "10"
    },
    Friday: {
        open: "10",
        close: "10"
    },
    Saturday: {
        open: "10",
        close: "10"
    },
    Sunday: {
        open: "12",
        close: "7"
    }
}

export default function home() {
    const home = document.createElement('div');
    home.classList.add('home');

    const schedule = document.createElement('div');
    schedule.classList.add('schedule');

    for (const [key, value] of Object.entries(hoursOfOperation)) {
        let elem = value.open + " AM" + " - " + value.close + " PM";
        const day = document.createElement('p');
        day.textContent = key + ": " + elem;
        schedule.appendChild(day);
    }
    home.appendChild(schedule);
    return home;
}