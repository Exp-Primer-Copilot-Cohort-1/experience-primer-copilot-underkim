// Create web server and listen on port 8080
// Route: /comments
// Method: GET
// Description: Return all comments

const express = require('express');
const app = express();
const port = 8080;

app.get('/comments', (req, res) => {
  res.send('Return all comments');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
