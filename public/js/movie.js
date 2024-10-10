
async function fetchMovieTitles() {
    const movieList = document.getElementById('movieList');
    try {
        const response = await fetch('http://localhost:8080/movie/all-movies');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const movies = await response.json();
        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = movie.title; // Assuming each movie object has a 'title' property
            movieList.appendChild(listItem);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchMovieTitles();




/* foreach showtime created for x id, add new button with time shown */
async function fetchShowtimes() {
    try {
        const response = await fetch('http://localhost:8080/api/showtimes');
        const showtimes = await response.json();
        displayShowtimes(showtimes);
    } catch (error) {
        console.error('Error fetching showtimes:', error);
    }
}

function displayShowtimes(showtimes) {
    const showtimesDiv = document.getElementById('showtimes');
    showtimesDiv.innerHTML = '';

    showtimes.forEach(showtime => {
        const showtimeElement = document.createElement('div');
        showtimeElement.innerHTML = `
                    <h2>${showtime.movie.title}</h2>
                    <p>Theatre: ${showtime.theatre.name}</p>
                    <p>Showtime: ${new Date(showtime.showtime).toLocaleString()}</p>
                    <p>Start Time: ${new Date(showtime.startTime).toLocaleString()}</p>
                `;
        showtimesDiv.appendChild(showtimeElement);
    });
}

fetchShowtimes();
