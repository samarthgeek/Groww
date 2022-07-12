/* eslint-disable react-native/no-inline-styles */
import {NavigationProp} from '@react-navigation/native';
import {Button, Divider, HStack, ScrollView, Text} from 'native-base';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import {STOCK_NAME, SYMBOLS} from '../constants';

interface Props {
  navigation: NavigationProp<any>;
}

const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{flex: 1}}>
        <Header />
        <Divider backgroundColor={'warmGray.700'} my={2} />
        <HStack justifyContent={'space-between'} m={'10px'}>
          <Text fontWeight={'bold'} fontSize="md" color={'white'}>
            Market Indices
          </Text>
          <Button
            size={'xs'}
            px={2}
            py={1}
            _text={{color: 'green.400', fontWeight: 'semibold'}}
            backgroundColor="green.900"
            rounded={'full'}>
            ALL STOCKS
          </Button>
        </HStack>
        <ScrollView horizontal={true} ml={'10px'} mt={'10px'}>
          {Object.keys(STOCK_NAME).map(stock => (
            <View key={stock} style={{marginRight: 15}}>
              <InfoCard navigation={navigation} symbol={stock as SYMBOLS} />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
