import {Box, Pressable, Skeleton, Text, VStack} from 'native-base';
import React, {Fragment, useEffect, useState} from 'react';
import {View} from 'react-native';
import {STOCK_NAME} from '../constants';
import {getLatestData} from '../functions';
import {StockData} from '../types';

type Props = {
  symbol: string;
};

type BoxState = 'INIT' | 'LOADING' | 'LOADED' | 'ERROR';

const InfoCard = ({symbol}: Props) => {
  const [state, setState] = useState<BoxState>('INIT');
  const [data, setData] = useState<StockData | null>(null);
  console.log(data);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setState('LOADING');
    const latestData = await getLatestData(symbol);
    if (latestData !== null) {
      setData(latestData);
      setState('LOADED');
    } else {
      setState('ERROR');
    }
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
          <Text color={'white'}>{data ? STOCK_NAME[data.symbol] : null}</Text>
          <View style={{marginTop: 'auto'}}>
            <Text color={'white'}>{data?.close}</Text>
            <Text color={'white'}>{data?.exchange}</Text>
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
      backgroundColor={'dark.50'}
      borderRadius={10}
      py={'20px'}
      px={'10px'}
      minWidth={'100px'}
      minHeight={'100px'}>
      {content}
    </Pressable>
  );
};

export default InfoCard;
