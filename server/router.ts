import * as express from 'express';
import { IncomingMessage, ServerResponse } from 'http';
import { join } from 'path';
import { HTTPStatus } from './lib/models';
import { UrlWithParsedQuery } from 'url';
import Server from 'next/dist/next-server/server/next-server';

const options = {
  root: join(__dirname, '../assets')
};

export function router(
  app: express.Express,
  handle: (
    req: IncomingMessage,
    res: ServerResponse,
    parsedUrl?: UrlWithParsedQuery
  ) => Promise<void>,
  appNext: Server
) {

  app.get('/unsub/:id', (req, res) => {
    const actualPage = '/unsub/guest'
    const queryParams = { id: req.params.id }
    appNext.render(req, res, actualPage, queryParams)
  });

  app.get('/password/update/:id', (req, res) => {
    const actualPage = '/password/update'
    const queryParams = { id: req.params.id }
    appNext.render(req, res, actualPage, queryParams)
  });

  app.get('*', (req, res) => {
    return handle(req, res);
  });
}
