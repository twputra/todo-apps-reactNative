import React from "react";
import {
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Input,
  Icon,
  IconButton,
  Link,
  Text,
  VStack,
} from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function FormNativeBase() {
  return (
    <Box
      safeArea
      bg="light.900"
      flex={1}
      w="100%"
      mx="auto"
      p={5}
      justifyContent="center"
    >
      <Heading size="lg" color="primary.500">
        Welcome
      </Heading>
      <Heading color="light.50" size="xs">
        Sign in to continue!
      </Heading>
      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label
            _text={{ color: "light.50", fontSize: "sm", fontWeight: 600 }}
          >
            Email/ID
          </FormControl.Label>
          <Input color="light.50" />
        </FormControl>
        <FormControl mt={5}>
          <FormControl.Label
            _text={{ color: "light.50", fontSize: "sm", fontWeight: 600 }}
          >
            Password
          </FormControl.Label>
          <Input type="password" color="light.50" />
          <Link
            _text={{ fontSize: "xs", fontWeight: 700, color: "cyan.500" }}
            alignSelf="center"
            mt={1}
          >
            Forgot Password?
          </Link>
        </FormControl>
        <VStack>
          <Button colorScheme="cyan" _text={{ color: "white" }}>
            Login
          </Button>
          <HStack justifyContent="center" alignItems="center">
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="facebook"
                  size="md"
                  color="white"
                />
              }
            />
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="google"
                  size="md"
                  color="white"
                />
              }
            />
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="github"
                  size="md"
                  color="white"
                />
              }
            />
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="twitter"
                  size="md"
                  color="white"
                />
              }
            />
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="whatsapp"
                  size="md"
                  color="white"
                />
              }
            />
          </HStack>
        </VStack>
        <HStack justifyContent="center">
          <Text fontSize="sm" color="white" fontWeight={400}>
            I'm a new user.{" "}
          </Text>
          <Link
            _text={{ color: "cyan.500", bold: true, fontSize: "sm" }}
            href="https://wa.me/628971406428"
          >
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}