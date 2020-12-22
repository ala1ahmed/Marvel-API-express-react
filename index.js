const express = require('express');
const apiRouter = require('./routes/api');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use('/api',apiRouter);

app.listen(port, () => `Server running on port ${port} 🔥`);