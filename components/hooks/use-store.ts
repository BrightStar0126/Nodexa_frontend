import { create } from 'zustand';

const store = (set: any, get: any) => {
  return {
    chainStats: {
      marketcap: '$10,000,000',
      price: '$0.0016',
      circulationSupply: '5,352,000,000',
      totalSupply: '21,000,000,000',
      activeSmartnodes: '3,250',
      totalSmartnodes: '3,300',
      lockedSupply: '65%',
      collateral: '1,000,000',
      smartnodeValue: '$1,650',
      dailyRewards: '$3.5 / 1,100',
      monthlyRewards: '$85 / 30,500',
      annualRoi: '35.5%',
    },
  };
};

const useStore = create(store);

export default useStore;
