import {StockData} from './types';

export const getLatestData = async (symbol: string) => {
  try {
    const res = await fetch(
      `http://api.marketstack.com/v1/eod/latest?access_key=9955ba1f763052d3d2a6a73567be095c&symbols=${symbol}`,
    );
    if (res) {
      const jsonData = await res.json();
      return (jsonData.data?.at(0) as StockData) ?? null;
    }
    return null;
  } catch (e: any) {
    return null;
  }
};

export const generateNumber = (min: number, max: number) => {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
};
