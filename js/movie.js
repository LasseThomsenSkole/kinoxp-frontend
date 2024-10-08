const urlParameters = new URLSearchParams(window.location.search)
const id = urlParameters.get('id')

async function fetchMovieDetails() {
    try {
        const response = await fetch('http://localhost:8080/'+ id, {
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