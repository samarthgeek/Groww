import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Icon,
  Input,
  Text,
} from 'native-base';
import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';

interface Props {
  navigation: any;
}

const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(
      'http://api.marketstack.com/v1/eod?access_key=9955ba1f763052d3d2a6a73567be095c&symbols=AAPL',
    )
      .then(async res => {
        console.log(await res.json());
      })
      .catch(e => console.log('e', e));
  };
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{backgroundColor: 'black', flex: 1}}>
        <Input
          textAlign={'center'}
          placeholder="Search Stocks"
          variant="rounded"
          margin={'20px'}
          borderWidth="1"
          borderColor={'warmGray.700'}
          fontSize={'md'}
          color="warmGray.400"
          InputLeftElement={<Avatar m={2} size={'sm'} bg="green.300" />}
          InputRightElement={<Avatar m={2} size={'sm'} bg="blue.50" />}
        />
        <Text color={'warmGray.400'} fontSize="md" textAlign={'center'}>
          Explore
        </Text>
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
