const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', async (req, res) => {
  const data = req.body;
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.someProperty === 'error') {
          reject(new Error('Data processing failed'));
        } else {
          resolve();
        }
      }, 2000);
    });
    res.status(201).json({ message: 'Data processed successfully' });
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});