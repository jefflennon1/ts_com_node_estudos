import { Router, Request, Response } from 'express';

import appointmemtRouter from './appointmentsRoutes'
import pessoaRouter from './pessoasRouter';
import testeRouter from './testeRouter';
import usersRoutes from './users.routes';

const routes = Router();

routes.use(appointmemtRouter);
routes.use(testeRouter);
routes.use(pessoaRouter);
routes.use(usersRoutes);

routes.get('/', (req: Request, res: Response)=>{
  return res.send('Hello word')
});


export default routes;
