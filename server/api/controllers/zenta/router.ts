import express from 'express';
import controller from './controller';
export default express
  .Router()
  .get('/', controller.all)
  .get('/:id', controller.byId)
  .post(
    '/consultaPendientesConfirmacion',
    controller.consultaPendientesConfirmacion
  )
  .post('/', controller.create);
