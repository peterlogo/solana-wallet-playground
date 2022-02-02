import { model, Schema, Types } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getBalance = (value: any) => {
  if (typeof value !== 'undefined') {
    return value.toString();
  }
  return value;
};

const AccountSchema = new Schema(
  {
    address: {
      type: String,
      required: true
    },
    balance: {
      type: Types.Decimal128,
      default: 0,
      get: getBalance
    },
    secret: {
      type: String,
      required: true
    }
  },
  { timestamps: true, toJSON: { getters: true } }
);

export const Account = model('Account', AccountSchema);
