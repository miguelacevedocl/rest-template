import ZentaService from '../../services/zenta.service';
import { Request, Response } from 'express';

export class Controller {
  all(req: Request, res: Response): void {
    ZentaService.all().then(r => {
      if (r) res.json(r);
      else res.status(500).end();
    });      
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id'])
    ZentaService.byId(id).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  consultaPendientesConfirmacion(req: Request, res: Response): void {
    ZentaService.consultaPendientesConfirmacion(req.body).then(r => {
      if (r) res.json(r);
      else res.status(500).end();
    });
  }

  create(req: Request, res: Response): void {
    ZentaService.create(req.body.name).then(r =>
      res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r)
    );
  }
}
export default new Controller();
