const express = require('express');
const app = express();
// const router = Router();

app.get('/', (req, res) => {
  res.send('Hello Kern');
})

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});