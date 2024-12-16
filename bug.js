const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously
  setTimeout(() => {
    // Simulate an error that might occur during processing
    if (data.someProperty === 'error') {
      // Throw an error. Express's default error handler will catch this.
      throw new Error('Data processing failed');
    } else {
      // ... Successful processing
      res.status(201).json({ message: 'Data processed successfully' });
    }
  }, 2000);
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});