document.getElementById('editMovieForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const genre = formData.get('genre').toUpperCase();
    const duration = formData.get('duration');
    const ageLimit = formData.get('ageLimit');
    const description = formData.get('description');
    const basePrice = formData.get('basePrice');
    const moviePoster = formData.get('moviePoster');
    const token = localStorage.getItem('jwtToken');


    const movie = {
        title,
        genre,
        duration,
        ageLimit,
        description,
        basePrice,
        moviePoster
    };

    console.log('Movie Object:', movie);

    try {
        const response = await fetch(`http://localhost:8080/movie/edit-movie/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(movie)
        });

        // Check the response status
        if (response.ok) {
            const movieDetails = await response.json();
            console.log(movieDetails);
            window.location.href = 'http://localhost:3000/all-movies';
        } else {
            const errorResponse = await response.json();
            console.error('Error:', errorResponse);
            alert(`Error: ${errorResponse.message || 'Something went wrong!'}`);
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});