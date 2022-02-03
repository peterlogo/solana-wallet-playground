import { Context } from 'koa';
import { PublicKey, LAMPORTS_PER_SOL, Keypair } from '@solana/web3.js';
import { connection } from '../services/solana';
import { Account } from '../models';

export async function fundAddress(ctx: Context): Promise<void> {
  try {
    const { address } = ctx.request.body;
    const publicKey = new PublicKey(address);
    const hash = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
    await connection.confirmTransaction(hash);
    ctx.status = 200;
    ctx.body = {
      message: 'Funds sent to address'
    };
  } catch (error) {
    ctx.status = 500;
    throw error;
  }
}

export async function getAddresses(ctx: Context): Promise<void> {
  try {
    const addresses = await Account.find();
    ctx.status = 200;
    ctx.body = {
      addresses
    };
  } catch (error) {
    ctx.status = 500;
    throw error;
  }
}

export async function createAddress(ctx: Context): Promise<void> {
  try {
    const keypair = Keypair.generate();
    const address = keypair.publicKey.toString();
    const secret = JSON.stringify(Array.from(keypair.secretKey));
    const account = new Account({ address, secret });
    await account.save();
    ctx.status = 200;
    ctx.body = {
      account,
      message: 'New address created'
    };
  } catch (error) {
    ctx.status = 500;
    throw error;
  }
}

function convertLamportToSol(value: number): number {
  const sol = value / 1000000000;
  return sol;
}

export async function refreshBalance(ctx: Context): Promise<void> {
  try {
    const { userAddress } = ctx.params;
    const publicKey = new PublicKey(userAddress);
    const solBalance = await connection.getBalance(publicKey);
    const newBalance = convertLamportToSol(solBalance);
    const address = await Account.findOne({ address: publicKey });
    console.log({ address, solBalance });
    if (parseInt(address.balance) === solBalance) {
      ctx.status = 200;
      ctx.body = {
        data: {},
        message: 'Address up to date'
      };
      return;
    }
    const updateAddress = await Account.findOneAndUpdate(
      { address: publicKey },
      {
        $inc: {
          balance: newBalance
        }
      },
      {
        new: true
      }
    );

    ctx.status = 200;
    ctx.body = {
      data: updateAddress,
      message: 'Address balance updated'
    };
  } catch (error) {
    ctx.status = 500;
    throw error;
  }
}
