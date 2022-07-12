// This can be converted to context later if App functionality increases

import {mockData} from './constants';
import {StockData} from './types';

interface CacheProps {
  currentStock: StockData;
}

const defaultCache: CacheProps = {
  currentStock: mockData,
};

let Cache: CacheProps = {...defaultCache};

export const setCurrentStock = (newStock: StockData) => {
  Cache.currentStock = newStock;
};

export default Cache;
