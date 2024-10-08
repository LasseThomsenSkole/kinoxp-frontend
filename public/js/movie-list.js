//dynamic dates
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

//Fetch title
async function fetchMovieDetails() {
    try {
        const response = await fetch('http://localhost:8080/'+ id, {
            method: 'POST'
        })

        if (response.ok) {
            const movieDetails = await response.json()

            const title = movieDetails.title
            document.getElementsByClassName('title').textContent = title

            const duration = movieDetails.duration
            document.getElementById('duration').textContent = duration
        }
        else {
            console.error('en error page')
        }
    }
    catch (error) {
        console.error(error)
    }
}

//Fetch showtime - ingen anelse om det fungere
async function fetchShowtime() {
    try {
        const response = await fetch('http://localhost:8080/'+ showtimeId , {
            method: 'POST'
        })

        if (response.ok) {
            const showtimeDetails = await response.json()

            const showtime = showtimeDetails.showtime
            document.getElementById('showtime').textContent = showtime
        }
        else {
            console.error('en error page')
        }
    }
    catch (error) {
        console.error(error)
    }
}