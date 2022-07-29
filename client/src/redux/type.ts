type balanceType = {
  amount: number;
  name: string;
  mobile: string;
  createdAt: Date;
  updatedat: Date;
  settled: boolean;
};

type initBalanceType = {
  loading: boolean;
  error: boolean;
  balance: balanceType[];
};

type userType = {
  name: string;
  mobile: string;
};

type initUserType = {
  loading: boolean;
  error: boolean;
  user: userType[];
};

export type callbackFxn = (...args: any) => any;
export type { initBalanceType, initUserType };
