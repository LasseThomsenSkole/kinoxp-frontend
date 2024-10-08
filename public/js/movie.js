const urlParameters = new URLSearchParams(window.location.search)
const id = urlParameters.get('id')

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

fetchMovieDetails();


async function fetchMovieTitles() {
    const movieList = document.getElementById('movieList');
    try {
        const response = await fetch('http://localhost:8080/movie/all-movies'); // URL of your backend Java service
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const movies = await response.json();
        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = movie;
            movieList.appendChild(listItem);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchMovieTitles();