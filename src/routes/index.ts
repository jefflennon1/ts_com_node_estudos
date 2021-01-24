import { Router, Request, Response } from 'express';

import appointmemtRouter from './appointmentsRoutes'

const routes = Router();

routes.use(appointmemtRouter);

routes.get('/', (req: Request, res: Response)=>{
  return res.send('Hello word')
});

export default routes;
