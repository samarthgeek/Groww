/* eslint-disable react-native/no-inline-styles */
import {NavigationProp} from '@react-navigation/native';
import {Button, ScrollView, Text} from 'native-base';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Cache from '../Cache';
import Graph from '../components/Graph';
import {STOCK_NAME} from '../constants';
import {formatCurrency} from '../functions';

interface Props {
  navigation: NavigationProp<any>;
}

const StockInfo = ({navigation}: Props) => {
  const {currentStock: data} = Cache;
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{flex: 1, marginVertical: 10}}>
        <Button
          _text={{color: 'white'}}
          alignSelf="flex-start"
          variant={'unstyled'}
          onPress={() => navigation.goBack()}>
          Back
        </Button>
        <ScrollView>
          <Text m={3} fontSize={'lg'} color={'white'}>
            {STOCK_NAME[data.symbol].toUpperCase()}
          </Text>
          <Text
            letterSpacing={1}
            mx={3}
            fontSize={'xl'}
            fontWeight="semibold"
            color={'white'}>
            {formatCurrency(data.close)}
          </Text>
          <Text
            fontSize={'xs'}
            mx={3}
            my={1}
            color={data.rate < 30 ? 'red.600' : 'green.500'}>
            {data.rate < 30 ? '-' : '+'}
            {data.rate} (0.45%)
          </Text>
          <Graph />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StockInfo;
