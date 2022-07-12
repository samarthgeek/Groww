import moment from 'moment';
import {StockData} from './types';

export enum SYMBOLS {
  MSFT = 'MSFT',
  AAPL = 'AAPL',
  AMZN = 'AMZN',
  GOOGL = 'GOOGL',
  BABA = 'BABA',
  WMT = 'WMT',
  VOD = 'VOD',
}

export const STOCK_NAME: Record<SYMBOLS, string> = {
  AAPL: 'Apple',
  AMZN: 'Amazon',
  BABA: 'Ali Baba',
  WMT: 'Walmart',
  GOOGL: 'Google',
  MSFT: 'Microsoft',
  VOD: 'Vodafone',
};

export const mockData: StockData = {
  close: null,
  date: moment(),
  exchange: null,
  high: null,
  low: null,
  rate: 30,
  symbol: SYMBOLS.AAPL,
};
