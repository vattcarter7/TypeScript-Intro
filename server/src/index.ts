import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router } from './routes/loginRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['afasdflkjdfs'] }));
app.use(router);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
