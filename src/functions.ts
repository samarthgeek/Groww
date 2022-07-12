import {mockData, SYMBOLS} from './constants';
import {StockData} from './types';

/**
 *  Generate mock stock data for Home Sceen
 */
export const getLatestData = async (symbol: SYMBOLS): Promise<StockData> => {
  await wait;
  const rate = Number(generateNumber(10, 50).toFixed(2));
  return {
    ...mockData,
    close: generateNumber(),
    rate,
    symbol,
  };
};

/**
 *  Generate a random number from a given range
 */
export const generateNumber = (min: number = 500, max: number = 1000) =>
  Math.random() * (max - min) + min;

/**
 *  Timeout function to show loading state
 */
export const wait = new Promise<void>(resolve =>
  setTimeout(() => resolve(), 2000),
);

/**
 *  format number to Indian currency
 */
export const formatCurrency = (value: number | null) =>
  new Intl.NumberFormat('en-IN', {currency: 'INR', style: 'currency'}).format(
    value ?? 0,
  );
