/* eslint-disable react-native/no-inline-styles */
import {NavigationProp} from '@react-navigation/native';
import {Pressable, Skeleton, Text} from 'native-base';
import React, {Fragment, useEffect, useState} from 'react';
import {View} from 'react-native';
import {mockData, STOCK_NAME, SYMBOLS} from '../constants';
import {formatCurrency, getLatestData} from '../functions';
import {StockData} from '../types';

type Props = {
  symbol: SYMBOLS;
  navigation: NavigationProp<any>;
};

type BoxState = 'INIT' | 'LOADING' | 'LOADED';

const InfoCard = ({symbol, navigation}: Props) => {
  const [state, setState] = useState<BoxState>('INIT');
  const [data, setData] = useState<StockData>(mockData);
  console.log(data);
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    setState('LOADING');
    const latestData = await getLatestData(symbol);
    setData(latestData);
    setState('LOADED');
  };

  let content;
  switch (state) {
    case 'INIT':
    case 'LOADING':
      content = (
        <Fragment>
          <Skeleton h={3} rounded="full" />
          <View style={{marginTop: 'auto'}}>
            <Skeleton h={3} rounded="full" w={'50px'} />
            <Skeleton h={2} rounded="full" w={'60px'} mt={2} />
          </View>
        </Fragment>
      );
      break;
    case 'LOADED':
      content = (
        <Fragment>
          <Text fontWeight={'semibold'} color={'white'}>
            {data ? STOCK_NAME[data.symbol].toUpperCase() : null}
          </Text>
          <View style={{marginTop: 'auto'}}>
            <Text fontSize={'12px'} fontWeight="semibold" color={'white'}>
              {formatCurrency(data.close)}
            </Text>
            <Text
              fontSize={'10px'}
              color={data.rate < 30 ? 'red.600' : 'green.500'}>
              {data.rate < 30 ? '-' : '+'}
              {data.rate} (0.45%)
            </Text>
          </View>
        </Fragment>
      );
      break;

    default:
      content = null;
      break;
  }
  return (
    <Pressable
      onPress={
        state === 'LOADING' ? null : () => navigation.navigate('StockInfo')
      }
      backgroundColor={'dark.50'}
      borderRadius={10}
      py={'15px'}
      px={'8px'}
      minWidth={'100px'}
      minHeight={'100px'}>
      {content}
    </Pressable>
  );
};

export default InfoCard;
