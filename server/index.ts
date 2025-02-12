import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// A simple API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
