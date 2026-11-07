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

// home route, shows the home.ejs page
app.get('/', (req, res) => {
  res.render('home');
});

// start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));