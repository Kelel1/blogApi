const express = require('express');
const app = express();
// const router = express.Router();

app.get('/', (req, res) => {
  res.send('Hello Kern');
})

const PORT = 4000;
// router.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

module.exports = app;