import { Router, Request, Response } from 'express';

import appointmemtRouter from './appointmentsRoutes'
import pessoaRouter from './pessoasRouter';
import usersRoutes from './users.routes';
import sessionRoutes from './session.routes';

const routes = Router();
routes.use('/session', sessionRoutes);
routes.use('/users', usersRoutes);
routes.use('/appointments', appointmemtRouter);
routes.use('/pessoas', pessoaRouter);

routes.get('/', (req: Request, res: Response)=>{
  return res.send('This application is started!')
});

export default routes;
