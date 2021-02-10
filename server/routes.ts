import { Application } from 'express';
import zenta from './api/controllers/zenta/router';
export default function routes(app: Application): void {
  app.use('/api/v1/zenta', zenta);
}