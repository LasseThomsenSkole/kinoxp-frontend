const id = document.getElementById('id').value


async function fetchMovieDetails() {
    try {
        const response = await fetch('http://localhost:8080/'+ id, {
            method: 'POST'
        })

        if (response.ok) {
            const movieDetails = await response.json()

            const title = movieDetails.title
            document.getElementsByClassName('title').textContent = title

            const genre = movieDetails.genre //find lige ud af
            document.getElementById('genre').textContent = genre

            const duration = movieDetails.duration
            document.getElementById('duration').textContent = duration

            const ageLimit = movieDetails.ageLimit
            document.getElementById('ageLimit').textContent = ageLimit

            const description = movieDetails.description
            document.getElementById('description').textContent = description
        }
        else {
            console.error('en error page')
        }
    }
    catch (error) {
        console.error(error)
    }
}