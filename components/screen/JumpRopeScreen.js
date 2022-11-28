import React from 'react';
import {
  Text,
  HStack,
  Button,
  Center,
  VStack,
  Box,
  Image,
  Progress,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function JumpRopeScreen() {
  // const img = require('../../assets/logo.png');
  return (
    <Box flex={1} bg="blue.600">
      <VStack alignItems="center" marginTop={10} space={5}>
        <Text fontSize="lg" color="white" bold>
          My Rope
        </Text>

        <HStack>
          <Box justifyContent={'center'}>
            <Ionicons name={'chevron-back-outline'} size={50} color={'white'} />
          </Box>
          <Box justifyContent={'center'}>
            <Image
              size={130}
              resizeMode={'contain'}
              borderRadius={100}
              bg={'white'}
              source={{uri: 'https://s1.ax1x.com/2022/11/27/zUSnK0.png'}}
              alt="Alternate Text"
            />
          </Box>
          <Box justifyContent={'center'}>
            <Ionicons
              name={'chevron-forward-outline'}
              size={50}
              color={'white'}
            />
          </Box>
        </HStack>
      </VStack>
      <VStack
        alignItems="center"
        marginTop={10}
        bg={'white'}
        borderRadius={30}
        height={600}>
        <HStack space="10" alignItems="center" marginTop={5}>
          <Center bg="white" size="16">
            <Text fontSize="lg" color={'tomato'} bold>
              #677
            </Text>
            <Text fontSize="xs">ID</Text>
          </Center>
          <Center bg="white" size="16">
            <Text fontSize="lg" color={'tomato'} bold>
              15/20
            </Text>
            <Text fontSize="xs">Mint</Text>
          </Center>
          <Center bg="white" size="16">
            <Text fontSize="lg" color={'tomato'} bold>
              8
            </Text>
            <Text fontSize="xs">Level</Text>
          </Center>
        </HStack>

        <VStack>
          <Center>
            <HStack ml={12} mt={15}>
              <VStack space={2} mt={10}>
                <Text fontSize="lg" color="blue.600" bold>
                  Efficency:
                </Text>
                <Text fontSize="lg" color="blue.600" bold>
                  Comfort:
                </Text>
                <Text fontSize="lg" color="blue.600" bold>
                  Durability:
                </Text>
                <Text fontSize="lg" color="blue.600" bold>
                  Luck:
                </Text>
              </VStack>

              <VStack space="6" mt={47}>
                <Center flexDirection={'row'} w="80%">
                  <Box w="100%">
                    <Progress
                      size="md"
                      value={80}
                      mx="3"
                      colorScheme="warning"
                    />
                  </Box>
                </Center>
                <Center flexDirection={'row'} w="80%">
                  <Box w="100%">
                    <Progress
                      size="md"
                      value={90}
                      mx="3"
                      colorScheme="warning"
                    />
                  </Box>
                </Center>
                <Center flexDirection={'row'} w="80%">
                  <Box w="100%">
                    <Progress
                      size="md"
                      value={50}
                      mx="3"
                      colorScheme="warning"
                    />
                  </Box>
                </Center>
                <Center flexDirection={'row'} w="80%">
                  <Box w="100%">
                    <Progress
                      size="md"
                      value={100}
                      mx="3"
                      colorScheme="warning"
                    />
                  </Box>
                </Center>
              </VStack>
            </HStack>

            <Button
              mt={10}
              mr={15}
              colorScheme="#2563eb"
              borderRadius={25}
              width={250}
              onPress={() => {
                console.log('Start Button');
              }}>
              <Text fontSize="lg" color={'white'} bold>
                Start
              </Text>
            </Button>
          </Center>
        </VStack>
      </VStack>
    </Box>
  );
}
