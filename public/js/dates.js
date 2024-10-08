const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();

//DAY 1
document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('day');

    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    const dayName = daysOfWeek[today.getDay()];
    dayElement.textContent = `${dayName}, ${today.getDate()}/${today.getMonth() + 1}`;
    daysContainer.appendChild(dayElement);
});
//DAY 2
document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('day1');

    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayName = daysOfWeek[tomorrow.getDay()];
    dayElement.textContent = `${dayName}, ${tomorrow.getDate()}/${tomorrow.getMonth() + 1}`;
    daysContainer.appendChild(dayElement);
});

//DAY 3
document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('day2');

    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 2);
    const dayName = daysOfWeek[tomorrow.getDay()];
    dayElement.textContent = `${dayName}, ${tomorrow.getDate()}/${tomorrow.getMonth() + 1}`;
    daysContainer.appendChild(dayElement);
});
//DAY 4
document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('day3');

    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 3);
    const dayName = daysOfWeek[tomorrow.getDay()];
    dayElement.textContent = `${dayName}, ${tomorrow.getDate()}/${tomorrow.getMonth() + 1}`;
    daysContainer.appendChild(dayElement);
});
//DAY 5
document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('day4');

    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 4);
    const dayName = daysOfWeek[tomorrow.getDay()];
    dayElement.textContent = `${dayName}, ${tomorrow.getDate()}/${tomorrow.getMonth() + 1}`;
    daysContainer.appendChild(dayElement);
});
//DAY 6
document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('day5');

    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 5);
    const dayName = daysOfWeek[tomorrow.getDay()];
    dayElement.textContent = `${dayName}, ${tomorrow.getDate()}/${tomorrow.getMonth() + 1}`;
    daysContainer.appendChild(dayElement);
});
//DAY 7
document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('day6');

    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 6);
    const dayName = daysOfWeek[tomorrow.getDay()];
    dayElement.textContent = `${dayName}, ${tomorrow.getDate()}/${tomorrow.getMonth() + 1}`;
    daysContainer.appendChild(dayElement);
});