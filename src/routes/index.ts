import Router from 'koa-router';
import {
  createAddress,
  fundAddress,
  getAddresses,
  refreshBalance
} from '../controllers';

const router = new Router({ prefix: '/v1/api' });

router.post('/solana/addresses/fund', fundAddress);
router.get('/solana/addresses', getAddresses);
router.post('/solana/addresses/create', createAddress);
router.get('/solana/addresses/:userAddress/refresh', refreshBalance);

export { router };
