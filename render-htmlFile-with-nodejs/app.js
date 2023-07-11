const express = require('express');
const people = require('./data');
const app = express();

// middleware
app.use(express.static('./methods-public'));
// for form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/people', (req, res) => {
  return res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'Please provide a name' });
  }
  res.status(200).json({ success: true, person: name });
});


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
