const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const {engine} = require("express-handlebars");

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


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
