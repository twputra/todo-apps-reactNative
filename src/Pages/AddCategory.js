import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  NativeBaseProvider,
  VStack,
  FormControl,
  Button,
  Input,
  Select,
  Box,
  TextArea
} from "native-base";
import Todo from "../component/Todo";
import LoginIcon from "../component/LoginIcon";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function AddCategory() {
  return (
    <NativeBaseProvider >
      <Center ml="10" mr="10" mt="4">
        <VStack space={2} w="100%">
          <HStack mt="5">
            <Text fontSize="3xl" bold>
              Add Category
            </Text>
          </HStack>
          <FormControl my="3">
            <Input
              type="text"
              placeholder="Name"
              bold
              bg="muted.200"
              size="md"
            />
          </FormControl>
          <Button variant="danger" bg="error.600" w="100%" color="white">
            <Text bold color="white">
              Add Category
            </Text>
          </Button>
          <Text fontSize="2xl" bold mt="5" mb="3">
              List Category
        </Text>
        <Text>
        <Button variant="danger" bg="primary.300" color="white" mr="5">Study</Button>
        <Button variant="danger" bg="error.400" color="white" mr="5">Home Work</Button>
        <Button variant="danger" bg="warning.400" color="white" mr="5">Workout</Button>
        </Text>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
