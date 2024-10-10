const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const {engine} = require("express-handlebars");
const {response} = require("express");

// Set up Handlebars as the view engine
app.engine('handlebars', engine({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/fragments'),
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the index page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'KinoXP',
        header: 'fragments/header',
        footer: 'fragments/footer'
    });
});
app.get('/admin', (req, res) => {
    fetch(`http://localhost:8080/movie/all-movies`)
        .then(response => response.json())
        .then(movies => {
            res.render('admin-dashboard', {
                layout: 'admin',
                movies: movies
            });
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
            res.status(500).send('Error fetching movies data');
        });
});
app.get('/new-movie', (req, res) => {
    res.render('new-movie', {
        title: 'KinoXP',
        header: 'fragments/header',
        footer: 'fragments/footer'
    });
});
app.get('/movie/:id', (req, res) => {
    const id = req.params.id;
    fetch(`http://localhost:8080/movie/${id}`)
        .then(response => response.json())
        .then(movie => {
            res.render('movie-details', {
                title: 'KinoXP',
                header: 'fragments/header',
                footer: 'fragments/footer',
                movie: movie
            });
        })
        .catch(error => {
            console.error('Error fetching movie:', error);
            res.status(500).send('Error fetching movie data');
        });
});

//GET movie-list
app.get('/all-movies', (req, res) => {
    fetch(`http://localhost:8080/movie/all-movies`)
        .then(response => response.json())
        .then(movies => {
            res.render('movie-list', {
                title: 'KinoXP',
                header: 'fragments/header',
                footer: 'fragments/footer',
                movies: movies
            });
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
            res.status(500).send('Error fetching movies data');
        });
});

//GET movie-list
app.get('/upcoming-movies', (req, res) => {
    fetch(`http://localhost:8080/movie/upcoming-movies`)
        .then(response => response.json())
        .then(movies => {
            res.render('upcoming-movie-list', {
                title: 'KinoXP',
                header: 'fragments/header',
                footer: 'fragments/footer',
                movies: movies
            });
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
            res.status(500).send('Error fetching movies data');
        });
});


app.get('/edit-movie/:id', (req, res) => {
    const id = req.params.id;
    fetch(`http://localhost:8080/movie/${id}`)
        .then(response => response.json())
        .then(movie => {
            res.render('edit-movie', {
                title: 'KinoXP',
                header: 'fragments/header',
                footer: 'fragments/footer',
                movie: movie
            });
        })
        .catch(error => {
            console.error('Error fetching movie:', error);
            res.status(500).send('Error fetching movie data');
        });
});

// endpoint for at oprette en ny film ... det her kan virke lidt dumt da vi nu har 2 backends
app.post('/create-movie', (req, res) => {
    const movie = req.body;
    const token = req.headers['authorization'];

    fetch('http://localhost:8080/movie/create-movie', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(movie),
    })
        .then(response => response.json())
        .then(() => {
            res.redirect('/all-movies')
        })
        .catch(error => {
            console.error('Error creating movie:', error);
            res.status(500).send('Error creating movie');
        });
});
app.get('/create-showtime', (req, res) => {
    res.render('create-showtime', {
        title: 'KinoXP',
        header: 'fragments/header',
        footer: 'fragments/footer'
    });
})
/*CREATE SHOWTIME
app.post('/create-showtime', (req, res) => {
    const showtime = req.body;
    const token = req.headers['authorization'];

    fetch('http://localhost:8080/showtime/create-showtime', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(showtime),
    })
        .then(response => response.json())
        .then(() => {
            res.redirect('/all-showtimes')
        })
        .catch(error => {
            console.error('Error creating showtime:', error);
            res.status(500).send('Error creating showtime');
        });
});*/
//EDIT SHOWTIME
app.get('/edit-showtime/:movieId', (req, res) => {
    const movieId = req.params.id;
    fetch(`http://localhost:8080/showtime/${movieId}`)
        .then(response => response.json())
        .then(showtime => {
            res.render('edit-showtime', {
                title: 'KinoXP',
                header: 'fragments/header',
                footer: 'fragments/footer',
                movie: showtime
            });
        })
        .catch(error => {
            console.error('Error fetching showtime:', error);
            res.status(500).send('Error fetching showtime data');
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

async function validateUserRole() {
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch('http://localhost:8080/auth/validate-role', {
            method: 'GET', // Specify the request method
            headers: {
                'Authorization': `Bearer ${token}`, // Include the JWT in the Authorization header
                'Content-Type': 'application/json', // Set the content type
            },
        });

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Failed to validate role: ' + response.statusText);
        }

        const roles = await response.json()// Parse the string into a JSON object/array

        console.log('User roles:', roles);

        // Here, you can handle the role as needed
        if (roles.includes('ADMIN')) {
            // User is an admin
            console.log('Access granted to admin features.');
        } else {
            // User is not an admin
            console.log('Access denied. User is not an admin.');
            window.location.href = '/unauthorized'; // Redirect or show an error
        }
    } catch (error) {
        console.error('Error:', error);
    }
}