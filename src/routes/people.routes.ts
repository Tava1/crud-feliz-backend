import Router from 'express';

import peopleController from '../controller/PeopleController';

const peopleRouter = Router();

peopleRouter.get('/', peopleController.read);

peopleRouter.get('/:id', peopleController.detail);

peopleRouter.post('/', peopleController.create);

peopleRouter.put('/:id', peopleController.update);

peopleRouter.delete('/:id', peopleController.delete);

export default peopleRouter;
