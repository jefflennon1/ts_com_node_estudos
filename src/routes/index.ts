import { Router, Request, Response } from 'express';

import appointmemtRouter from './appointmentsRoutes'
import pessoaRouter from './pessoasRouter';
import testeRouter from './testeRouter';
import usersRoutes from './users.routes';
import sessionRoutes from './session.routes';
import testSession from './testSession.routes';

const routes = Router();
routes.use('/session', sessionRoutes);
routes.use('/users', usersRoutes);
routes.use('/appointmemtRouter', appointmemtRouter);
routes.use('/pessoas',pessoaRouter);

routes.get('/', (req: Request, res: Response)=>{
  return res.send('Hello word')
});

export default routes;
