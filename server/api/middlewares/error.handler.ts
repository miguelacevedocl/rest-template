import { Request, Response, NextFunction, } from 'express';
import * as responseEntities from '../entities/error'
import { v4 as uuid } from 'uuid';
import * as log from '../services/logger';

// Error handler to display the error as HTML
// eslint-disable-next-line no-unused-vars, no-shadow
export default function errorHandler(err, req: Request, res: Response, next: NextFunction) {
  var sessionID = `${uuid()}-${process.env.APP_ID}`
  var logInfo: log.Message = {
    method: "errorHandler", message: `${err.status} - ${err.message}`, callId: sessionID, timeElapsed: 0, country: "", severity: "ERROR",
  }

  var response: responseEntities.Error = {
    status: err.status,
    message: err.message
  }
  log.Send(err)
  log.Send(logInfo)
  res.status(err.status || 500).send(response);
}

