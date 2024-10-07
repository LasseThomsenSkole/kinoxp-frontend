document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('days-container');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);
        const dayName = daysOfWeek[futureDate.getDay()];
        dayElement.textContent = `${dayName}, ${futureDate.getDate()}/${futureDate.getMonth() + 1}`;
        daysContainer.appendChild(dayElement);
    }
});