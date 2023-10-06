const express = require('express');

const configs = require('./configs/configs');
const apiRouter = require('./routes/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', apiRouter);

const port = configs.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));


