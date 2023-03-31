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
  TextArea, 
  Flex, 
  View, 
} from "native-base"; 
 
import Todo from "../component/Todo"; 
import LoginIcon from "../component/LoginIcon"; 
import { Fontisto } from "@expo/vector-icons"; 
 
// Define the config 
const config = { 
  useSystemColorMode: false, 
  initialColorMode: "dark", 
}; 
 
export default function ListTodo() { 
  return ( 
    <NativeBaseProvider> 
      <Center ml="10" mr="10" mt="10"> 
        <VStack space={2} w="100%"> 
          <View bg="primary.100" p="2" mb="5"> 
            <Flex direction="row"> 
              <Text fontSize={24} bold w="80%"> 
                Study - Golang 
              </Text> 
              <Flex direction="column" w="20%"> 
                  <Button bg="primary.300" px="1" mb="4">Study</Button> 
                  <Button bg="light.300" size="50" style={{borderRadius: 50}}>   </Button> 
                </Flex> 
            </Flex> 
                 
            <Text mb="3" color="light.400"> 
            Learn Golang to improve fundamentals and familiarize with coding.</Text> 
            <Text color="light.400">Advantages of Go </Text> 
            <Text mb="3" color="light.400">Go has advantages over other languages, including: </Text> 
            <Text color="light.400">Supports concurrency at the language level with fairly easy application</Text> 
            <Text color="light.400">Supports data processing with multiple processors at the same time 'parallel processing' </Text> 
            <Text color="light.400">Have a garbage collector </Text> 
            <Text color="light.400">The compilation process is very fast </Text> 
            <Text mb="3" color="light.400">It's not a hierarchical programming language and it's not strict OOP, giving developers the freedom to how to write code. </Text> 
            <Text mb="3" color="light.400">Listing Material : </Text> 
            <Text color="light.400">1.  Installation </Text> 
            <Text color="light.400">2.  Setup Go Modules </Text> 
            <Text color="light.400">3.  Setup Gopath and Workspace </Text> 
            <Text color="light.400">4.  Go Command </Text> 
            <Text color="light.400">5.  Hello World </Text > 
            <Text color="light.400">6.  Variable </Text> 
            <Text color="light.400">7.  Tipe DataKonstanta </Text > 
            <Text color="light.400">8.  Operator </Text > 
            <Text color="light.400">9.  Condition </Text > 
            <Text color="light.400">10. Loops </Text> 


            <Flex direction="row" marginTop="10">
            <Fontisto color="light.400" name="date" size={16}  /> 
            <Text fontSize={13} color="light.400">19 July 2022</Text>


            </Flex>
          </View> 
        </VStack> 
      </Center> 
    </NativeBaseProvider> 
  ); 
}