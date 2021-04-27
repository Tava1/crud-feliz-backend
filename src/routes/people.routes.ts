import Router from 'express';

const peopleRouter = Router();

peopleRouter.get('/', async (req, res) => {
  res.json({ ok: true });
});

export default peopleRouter;
