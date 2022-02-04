import axios from './axios';

interface Wallet {
  address: string;
  balance: string;
  secret?: string;
  message?: string;
}

interface WalletDataResponse {
  address: string;
  balance: string;
  secret?: string;
}

export async function getAddresses(): Promise<Wallet[] | []> {
  try {
    const response = await axios.get('/solana/addresses');
    const resData = await response.data;
    return resData.addresses;
  } catch (error) {
    throw error;
  }
}

export async function createAddress(): Promise<Wallet> {
  try {
    const response = await axios.post('/solana/addresses/create');
    const resData = await response.data;
    return resData.account;
  } catch (error) {
    throw error;
  }
}

export async function refreshBalance(address: string): Promise<{
  data: WalletDataResponse;
  message: string;
}> {
  try {
    const response = await axios.get(`/solana/addresses/refresh/${address}`);
    const resData = await response.data;
    return resData.data;
  } catch (error) {
    throw error;
  }
}
