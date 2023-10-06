const { Router } = require('express');

const filesController = require('../controllers/files.controller');

const filesRouter = Router();

filesRouter.post('/', filesController.createOne);
filesRouter.get('/', filesController.getAll);
filesRouter.get('/:filename', filesController.getOne);
filesRouter.put('/:filename', filesController.updateOne);
filesRouter.delete('/:filename', filesController.deleteOne);

module.exports = filesRouter;

