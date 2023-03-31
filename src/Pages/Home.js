import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Stack,
  Box,
  Image,
  Button
} from "native-base";
import Todo from "../component/Todo";
import { NavigationContainer } from '@react-navigation/native'


export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
        <VStack space={2} alignItems="center" mt={100}>
          <Todo />
            <HStack alignItems="center" mt="5">
              <Text>Write your activity and finish your activity.</Text>
            </HStack>
            <HStack alignItems="center">
              <Text>Fast, Simple and Easy to Use</Text>
            </HStack>
            <Button mt="10" variant="danger" bg="error.600" w="80%"  onPress={()=>navigation.navigate('Login')}>
              <Text bold color="white">Login</Text>
            </Button>
            <Button my="1" mx="10" variant="secondary" bg="muted.500" w="80%" onPress={()=>navigation.navigate('Register')}>
              <Text bold color="white">Register</Text>
            </Button>
        </VStack>
    </NativeBaseProvider>

  );
}

