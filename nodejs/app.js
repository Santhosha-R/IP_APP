const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.get('/items/:itemId', (req, res) => {
  const { itemId } = req.params;
  const { q } = req.query;
  res.json({ item_id: itemId, q: q || null });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
