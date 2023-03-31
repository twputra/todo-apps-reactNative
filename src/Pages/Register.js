import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
    VStack,
    Image,
    Center,
    HStack,
    Button,
    Text,
    Box,
    Heading,
    FormControl,
    Input,
    Link,
    NativeBaseProvider,
} from "native-base";
import { TouchableOpacity } from "react-native";
import LoginIcon from "../component/LoginIcon";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Register({navigation}) {
    let [register, setRegister] = useState({
        firstName: "",
        email: "",
        password: "",
    });

    const handleChanges = (title, value) => {
        setRegister({
            ...register,
            [title]: value,
        });
    };
    console.log(register);

    const handleRegister = async () => {
        try {
            const config = {
                Headers: {
                    "Content-type": "application/json",
                },
            };

            const body = JSON.stringify(register);

            const res = await axios.post(
                "https://api.kontenbase.com/query/api/v1/08f9b47f-0428-407e-a5df-e62d552743e1/auth/register",
                body,
                config
            );
            if (res) {
                await AsyncStorage.setItem("token", res.data.token);
            }
            const value = await AsyncStorage.getItem("token");
            if (value != null) {
                console.log(value);
                navigation.navigate("Login");
            }
        } catch (error) {
            console.log(error);
            alert(error.res.data.message);
        }
    };

    return (
        <NativeBaseProvider>
            <VStack space={2}   mt={100}>
                <Center>
                    <LoginIcon />
                    <HStack mt="5">
                        <Text fontSize="3xl" bold>Register</Text>
                    </HStack>
                    <FormControl my="3"  w="80%">
                        <Input type="email"
                            placeholder="Email"
                            bold
                            bg="muted.200"
                            onChangeText={(value) => handleChanges("email", value)}
                            value={register.email}
                        />
                    </FormControl>
                    <FormControl mb="3"  w="80%">
                        <Input type="name"
                            placeholder="Name"
                            bold
                            bg="muted.200"
                            size="md"
                            onChangeText={(value) => handleChanges("firstName", value)}
                            value={register.firstName}
                        />
                    </FormControl>
                    <FormControl  w="80%">
                        <Input type="password"
                            placeholder="password"
                            bold
                            bg="muted.200"
                            size="md"
                            onChangeText={(value) => handleChanges("password", value)}
                            value={register.password}
                        />
                    </FormControl>
                    <Button variant="danger" bg="error.600" w="80%" mt="10" onPress={handleRegister}>
                        <Text bold color="white">Register</Text>
                    </Button>

                    <Center>
                    <Text mb="10">
                        Joined us before? {" "}
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <Text color="error.600" bold mt="2">
                              Login
                            </Text>
                        </TouchableOpacity>
                    </Text>
                    </Center>
                </Center>
            </VStack>
        </NativeBaseProvider>
    );
}
