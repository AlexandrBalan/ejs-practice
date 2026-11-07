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

// start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));