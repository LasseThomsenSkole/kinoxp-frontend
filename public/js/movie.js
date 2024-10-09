const urlParameters = new URLSearchParams(window.location.search)
const id = urlParameters.get('id')

/*
async function fetchMovieDetails() {
    console.log('http://localhost:8080/'+ id)

    try {
        const response = await fetch('http://localhost:8080/movie/'+ id, {
            method: 'GET'
        })

        if (response.ok) {
            const movieDetails = await response.json()

            if(movieDetails.title) {
                document.title = movieDetails.title //så det står på fanen
                document.getElementById('title').textContent = `${movieDetails.title}`
            }
            if(movieDetails.genre) {
                document.getElementById('genre').textContent = `${movieDetails.genre}`
            }
            if(movieDetails.duration) {
                document.getElementById('duration').textContent = `${movieDetails.description}`
            }
            if(movieDetails.ageLimit) {
                document.getElementById('ageLimit').textContent = `${movieDetails.ageLimit}`
            }
            if(movieDetails.description) {
                document.getElementById('description').textContent = `${movieDetails.description}`
            }
        }
        else {
            console.error('en error page')
        }
    }
    catch (error) {
        console.error(error)
    }
}

fetchMovieDetails();*/


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