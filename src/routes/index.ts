import express, {Application, Request, Response} from 'express';

export const app: Application = express();


app.get(
    '/',
    async (req: Request, res: Response): Promise<Response> => {
      console.log(req);
      return res.status(200).send({
        message: 'Hello World!',
      });
    },
);


export * from './kintone';
