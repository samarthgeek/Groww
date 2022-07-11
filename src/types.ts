import {SYMBOLS} from './constants';

export interface StockData {
  adj_close: number | null;
  adj_high: number | null;
  adj_low: number | null;
  adj_open: number | null;
  adj_volume: number | null;
  close: number | null;
  date: string | null;
  dividend: number | null;
  exchange: string | null;
  high: number | null;
  low: number | null;
  open: number | null;
  split_factor: number | null;
  symbol: SYMBOLS;
  volume: number | null;
}
