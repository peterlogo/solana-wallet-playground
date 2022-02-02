import { Connection } from '@solana/web3.js';
import dotenv from 'dotenv';

dotenv.config();

export const connection = new Connection(
  process.env.SOLANA_NODE_URL as string,
  'confirmed'
);

export async function connectToNode(): Promise<Record<string, unknown>> {
  try {
    const version = await connection.getVersion();
    return {
      status: 'connected',
      version: version['solana-core']
    };
  } catch (error) {
    throw error;
  }
}
