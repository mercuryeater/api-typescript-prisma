import { Application } from 'express';

//Aca importa y medio declara lo que por default se exporta en el modulo
// /api/healthcheck:
import userRouter from './api/user';

function routes(app: Application) {
  app.use('/user', userRouter);
}

export default routes;