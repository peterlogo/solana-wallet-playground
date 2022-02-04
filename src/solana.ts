import Koa from 'koa';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import dotenv from 'dotenv';
import koaLogger from 'koa-logger';
import koaBunyanLogger from 'koa-bunyan-logger';
import mongoose from 'mongoose';
import { connectToNode, logger } from './services';
import { router } from './routes';

dotenv.config();
const app = new Koa();
const PORT = process.env.PORT;

// middleware
app.use(koaBody());
app.use(cors());
app.use(koaBunyanLogger(logger));
app.use(koaLogger());
app.use(koaBunyanLogger.requestLogger());
app.use(koaBunyanLogger.timeContext());
app.use(router.routes()).use(router.allowedMethods());

// connect to database
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log(`\x1b[36msolana-service connected to database`);
  })
  .catch((err) => {
    throw err;
  });

// connect to solana shared node cluster
connectToNode()
  .then((res) => {
    console.log(`\x1b[36msolana-service-node version:${res.version} connected`);
  })
  .catch((err) => {
    throw err;
  });

// Runs the server and listens for connection.
export const server = app.listen(PORT, () => {
  console.log(`\x1b[36msolana-service connected to port : ${PORT}`);
});
