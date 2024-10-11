document.getElementById('createShowtimeForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    const movieId = formData.get('movieId');
    const theatre = formData.get('theatre');
    const showtime = formData.get('showtime');
    const startTime = formData.get('startTime');
    const token = localStorage.getItem('jwtToken');


    const movie = {
        movieId,
        theatre,
        showtime,
        startTime
    };

    console.log('Movie Object:', movie);

    try {
        const response = await fetch('http://localhost:8080/movie/create-showtime', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(movie)
        });

        // Check the response status
        if (response.ok) {
            const showtime = await response.json();
            console.log(showtime);
            window.location.href = 'http://localhost:3000/admin';
        } else {
            const errorResponse = await response.json();
            console.error('Error:', errorResponse);
            alert(`Error: ${errorResponse.message || 'Something went wrong!'}`);
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});
