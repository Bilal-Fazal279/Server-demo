const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/image', (req, res) => {
  const imageData = req.body.image;
  // Process the image data here
  console.log('Received image data:', imageData);
  res.send('Image received successfully!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
