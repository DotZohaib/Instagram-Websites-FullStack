const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port

// Assuming you have a function to fetch stories from a database or API
const fetchStories = async () => {
  // Implement your logic to fetch stories
  // This example simulates some stories
  const stories = [
    { id: 1, user: { picture: '/images/user1.jpg' } },
    { id: 2, user: { picture: '/images/user2.jpg' } },
    // ... more stories
  ];
  return stories;
};

app.set('views', path.join(__dirname, 'views')); // Set views directory
app.set('view engine', 'ejs'); // Use EJS templating engine

app.get('/', async (req, res) => {
  try {
    const stories = await fetchStories(); // Fetch stories asynchronously

    // Set initialStoryCount as desired
    const initialStoryCount = 3;  

    res.render('feed', { stories, initialStoryCount });
  } catch (error) {
    console.error(error); // Handle any errors during story fetching
    res.status(500).send('Internal Server Error'); // Send error response
  }
});

// Handle additional routes and error handling as needed

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
