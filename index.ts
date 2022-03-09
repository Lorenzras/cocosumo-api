import express from 'express';
import {kintoneRouter} from './src/routes';
import rootDir from './src/util/rootDir';


const port = 3001;
const app = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/kintone', kintoneRouter);

console.log(rootDir);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
