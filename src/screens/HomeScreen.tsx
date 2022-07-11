import {Button, Divider, HStack, ScrollView, Text} from 'native-base';
import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import {STOCK_NAME} from '../constants';

interface Props {
  navigation: any;
}

const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // await fetch(
    //   'http://api.marketstack.com/v1/eod?access_key=9955ba1f763052d3d2a6a73567be095c&symbols=AAPL',
    // )
    //   .then(async res => {
    //     console.log((await res.json()).data);
    //   })
    //   .catch(e => console.log('e', e));
  };
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{backgroundColor: 'black', flex: 1}}>
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
            <View style={{marginRight: 15}}>
              <InfoCard symbol={stock} />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
