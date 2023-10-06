const { Router } = require('express');

const filesRouter = require('./files.router');

const apiRouter = Router();

apiRouter.use('/files', filesRouter);

module.exports = apiRouter;