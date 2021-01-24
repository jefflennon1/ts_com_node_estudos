import { Router, Request, Response } from 'express';

import appointmemtRouter from './appointmentsRoutes'
import testeRouter from './testeRouter';

const routes = Router();

routes.use(appointmemtRouter);
routes.use(testeRouter)

routes.get('/', (req: Request, res: Response)=>{
  return res.send('Hello word')
});

export default routes;
