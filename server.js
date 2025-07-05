const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let reviews = []; // Simple array to store reviews (in-memory)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission to add a review
app.post('/add-review', (req, res) => {
  const { name, review } = req.body;
  if (name && review) {
    reviews.push({ name, review });
  }
  res.redirect('/');
});

// Endpoint to get all reviews
app.get('/reviews', (req, res) => {
  res.json(reviews);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
