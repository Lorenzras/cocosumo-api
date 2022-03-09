import express, {Request, Response} from 'express';

const router = express.Router();

router.get(
    '/',
    async (req: Request, res: Response): Promise<Response> => {
      console.log(req);
      return res.status(200).send({
        message: 'Hello World!',
      });
    },
);

router.post('/',
    async (req: Request, res: Response): Promise<Response> => {
      console.log(req.body);
      return res.status(200).send({
        message: 'POST!',
        ...req.body,
      });
    },
);

export {router as kintoneRouter};
