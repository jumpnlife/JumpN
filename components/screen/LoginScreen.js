import React from 'react';
import {Text, Button, Center, Box, Image} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {
  loginState,
  loginAction,
  logoutAction,
} from '../../redux/slice/loginSlice';

export default function LoginScreen() {
  const login = useSelector(loginState);
  const dispatch = useDispatch();

  return (
    <Box bg="#7A67EE" h={1000}>
      <Center>
        <Box h={200} />

        <Image
          source={{
            uri: 'https://s1.ax1x.com/2022/11/27/zNvXZD.png',
          }}
          alt="Alternate Text"
          size="2xl"
        />
        <Text fontSize="lg" mt={10} textAlign={'center'} color={'white'} bold>
          Connect your wallet to start and manage your Jump Rope NFTs
        </Text>
        <Button
          mt={10}
          mr={15}
          borderRadius={25}
          width={280}
          onPress={() => {
            console.log('loginState', login);
            dispatch(loginAction());
          }}>
          <Text fontSize="lg" color={'white'} bold>
            Connect Wallet
          </Text>
        </Button>
      </Center>
    </Box>
  );
}
