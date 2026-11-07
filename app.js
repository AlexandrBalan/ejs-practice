// import express
import express from 'express';

// make the express app
const app = express();

// port number for the server
const PORT = 3008; // Choose an available port number

// tell express to use ejs for the views
app.set('view engine', 'ejs');

// lets us use files in the public folder
app.use(express.static('public'));

// Default route. Renders home page ejs with information from person object
app.get("/", (req, res) => {
    const person = {name: "Donald Duck", occupation: "plumber", favoriteColor: "black"}
    res.render('home', {person})
})

// Route to friends. Renders friends ejs page
app.get("/friends", (req, res) => {
    const friends = ["Mickey", "Goofy", "Minnie", "Dasiy"];
    res.render("friends", {friends});
})

// Route to movie. Renders all movies
app.get("/movies", (req, res) => {
    const movies = ["Transformers", "Fast and furious", "IT", "Resident Evil"];
    res.render("movies", {movies});
})

// start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));