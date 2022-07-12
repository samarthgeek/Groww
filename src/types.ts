import {Moment} from 'moment';
import {SYMBOLS} from './constants';

export interface StockData {
  close: number | null;
  date: Moment;
  exchange: string | null;
  high: number | null;
  low: number | null;
  rate: number;
  symbol: SYMBOLS;
}
