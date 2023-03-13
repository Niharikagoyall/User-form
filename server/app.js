const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const userFormRoutes = require('./routes/index');
app.use('/user-form', userFormRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
