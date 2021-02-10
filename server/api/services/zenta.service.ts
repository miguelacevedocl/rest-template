import L from '../../common/logger';
import * as request from 'request-promise';

let id = 0;
interface Zenta {
  id: number;
  name: string;
}

const endpointFeed = process.env.ENDPOINTFEED;
const requestConfiguration = {
  json: true,
  resolveWithFullResponse: false,
  body: {},
  headers: {
    'Content-Type': 'application/json',
  },
};

export class ZentaService {
  consultaPendientesConfirmacion(req: any): Promise<any[]> {
    requestConfiguration.body = req;
    return request
      .post(endpointFeed, requestConfiguration)
      .then(response => {
        return response;
      })
      .catch(e => {
        L.error(e.message);
        return false;
      });
  }

  all(): Promise<Zenta[]> {
    return request
      .get('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
      .then(response => {
        return JSON.parse(response);
      })
      .catch(e => {
        L.error(e.message);
        return false;
      });
  }

  byId(id: number): Promise<Zenta> {
    L.info(`fetch example with id ${id}`);
    return this.all().then(r => r[id]);
  }

  create(name: string): Promise<Zenta> {
    L.info(`create example with name ${name}`);
    const examples: any = {};
    const example: Zenta = {
      id: id++,
      name,
    };
    examples.push(example);
    return Promise.resolve(example);
  }
}

export default new ZentaService();
