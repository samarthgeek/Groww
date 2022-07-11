import {Avatar, Input, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';

const Header = () => {
  return (
    <View>
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
    </View>
  );
};

export default Header;
