import React, { useState } from "react";

import {
  Text,
  HStack,
  Center,
  NativeBaseProvider,
  VStack,
  FormControl,
  Button,
  Input,
  Flex,
  View,
  Select,
} from "native-base";
import Profile from "../component/Profile";
import { Fontisto } from '@expo/vector-icons';
import NavbarFooter from "../component/NavbarFooter";



export default function ListTodo ({ navigation }) {

  return (
    <>
    <NativeBaseProvider >
      <Center ml="10" mr="10">
        <VStack space={2} w="100%" mb="4">
          <HStack alignItems="center" mt="5">   
            <Text fontSize="3xl" w="75%" bold mt="5" mb="5" pt="5">
              Hi, Tenant
            </Text>
            <Flex w="25%">
              <Profile />
            </Flex>
          </HStack>
            
          <FormControl my="3">
            <Input
              type="text"
              placeholder="Search"
              bold
              bg="muted.200"
              size="md"
            />
          </FormControl>

          <FormControl>
            <Flex direction="row" justifyContent="space-between" w="100%">
              <Input
                type="date"
                placeholder="Choose Date"
                bold
                mr={1}
                bg="muted.200"
                w="30%"
              />
              <FormControl w="30%" bg="muted.200">
                <Select minWidth="30" placeholder="Category" mt="1">
                  <Select.Item label="Study" value="1" />
                  <Select.Item label="Home Work" value="2" />
                  <Select.Item label="Workout" value="3" />
                </Select>
              </FormControl>
              <FormControl w="30%" bg="muted.200">
                <Select minWidth="30" placeholder="Status" mt="1">
                  <Select.Item label="Done" value="1" />
                  <Select.Item label="Undone" value="2" />
                </Select>
              </FormControl>
            </Flex>
          </FormControl>
        

          <View bg="primary.100" borderRadius="10" p="2">
              <Flex direction="row"  w="100%">
                <Flex direction="column" w="80%">
                  <Text mt="2" fontSize={17} bold onPress={() => navigation.navigate("Detail")}>
                  Study - Golang
                  </Text>
                  <Text mb="3" fontSize={12} color="light.500" >
                  Learn Golang to improve fundamentals and familiarize with coding.
                  </Text>
                  <Flex direction="row">
                    <Fontisto name="date" size={16} color="black"  /> 
                    <Text fontSize={13}>19 July 2022</Text>
                  </Flex>
                </Flex >  
                <Flex direction="column" w="20%">
                  <Button bg="primary.300" mb="4">Study</Button>
                  <Button bg="light.300" size="50" X="277px" Y="388.25px" W="30px" H="30px">  </Button>
                  {/* <Image source={Vector} alt="" size="50" /> */}
                </Flex>
              </Flex>
          </View>
    
          <View bg="success.100" borderRadius="10" p="2">
              <Flex direction="row"  w="100%">
                <Flex direction="column" w="80%">
                  <Text mt="2" fontSize={17} bold>
                    Home Work - Mathematics
                  </Text>
                  <Text mb="3" fontSize={12} color="light.500" >
                    Do homework math probability
                  </Text>
                  <Flex direction="row">
                    <Fontisto name="date" size={16} color="black"  /> 
                    <Text fontSize={13}>19 July 2022</Text>
                  </Flex>
                </Flex >  
                <Flex direction="column" w="20%">
                  <Button bg="danger.300" px="1" mb="4" >Home Work</Button>
                  <Button bg="success.300" size="50">   </Button>
                </Flex>
              </Flex>
          </View>

          <View bg="danger.100" borderRadius="10" p="2">
              <Flex direction="row"  w="100%">
                <Flex direction="column" w="80%">
                  <Text mt="2" fontSize={17} bold>
                    Study - HTML
                  </Text>
                  <Text mb="3" fontSize={12} color="light.500" >
                    Learn HTML to improve fundamentals and familiarize with coding 
                  </Text>
                  <Flex direction="row">
                    <Fontisto name="date" size={16} color="black"  /> 
                    <Text fontSize={13}>19 July 2022</Text>
                  </Flex>
                </Flex >  
                <Flex direction="column" w="20%">
                  <Button bg="primary.300" px="1" mb="4">Study</Button>
                  <Button bg="success.300" size="50">   </Button>
                </Flex>
              </Flex>
          </View>

          <View bg="warning.100" borderRadius="10" p="2">
              <Flex direction="row"  w="100%">
                <Flex direction="column" w="80%">
                  <Text mt="2" fontSize={17} bold>
                    Study - Javascript
                  </Text>
                  <Text mb="3" fontSize={12} color="light.500" >
                    Learn javascript to improve fundamentals and familiarize with coding 
                  </Text>
                  <Flex direction="row">
                    <Fontisto name="date" size={16} color="black"  /> 
                    <Text fontSize={13}>19 July 2022</Text>
                  </Flex>
                </Flex >  
                <Flex direction="column" w="20%">
                  <Button bg="primary.300" px="1" mb="4">Study</Button>
                  <Button bg="light.300" size="50">   </Button>
                </Flex>
              </Flex>
          </View>
        </VStack>
      </Center>
    </NativeBaseProvider>
      {/* <NavbarFooter /> */}
      </>
  );
}
