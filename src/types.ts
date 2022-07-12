import {SYMBOLS} from './constants';

export interface StockData {
  close: number | null;
  date: moment.Moment;
  exchange: string | null;
  high: number | null;
  low: number | null;
  rate: number;
  symbol: SYMBOLS;
}

export interface RangedData {
  date: moment.Moment;
  value: number;
}

export type Filter = 'DAY' | 'MONTH' | 'WEEK';
