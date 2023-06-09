import { Application } from 'express';

//Aca importa y medio declara lo que por default se exporta en el modulo
// /api/healthcheck:
import userRouter from './api/user';
import postsRouter from './api/posts';

function routes(app: Application) {
  app.use('/user', userRouter);

  app.use('/posts', postsRouter);
}

export default routes;