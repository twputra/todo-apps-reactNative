import { StyleSheet, View } from "react-native";
import * as React from "react";
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
import {  TouchableOpacity } from "react-native";
import LoginIcon from "../component/LoginIcon";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login({navigation}) {
    const [isLogin, setIsLogin] = React.useState(false);
    const [login, setLogin] = React.useState({
        email: "",
        password: "",
    });

    const handleChanges = (title, value) => {
        setLogin({
            ...login,
            [title]: value,
        });
    };

    console.log(login);

    const handlelogin = async () => {
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                },
            };

            const body = JSON.stringify(login);
            setIsLogin(true);
            const res = await axios.post(
                "https://api.kontenbase.com/query/api/v1/08f9b47f-0428-407e-a5df-e62d552743e1/auth/login",
                body,
                config
            );
            console.log(res);
            setIsLogin(false);
            if (res) {
                await AsyncStorage.setItem("token", res.data.token);
            }
            const value = await AsyncStorage.getItem("token");
            if (value != null) {
                console.log(value);
                navigation.navigate("Tab1");
            }
            console.log(value);
        } catch (error) {
            console.log(error);
            alert(error.res.data.message);
        }
    };

    return (
        <NativeBaseProvider>
            <VStack space={2}  mt={100}>
                    <Center>
                        <LoginIcon />
                        <HStack mt="5">
                            <Text fontSize="3xl" bold>Login</Text>
                        </HStack>
                        <FormControl my="3" w="80%">
                            <Input type="email"
                                placeholder="Email"
                                bold
                                bg="muted.200"
                                size="md"
                                onChangeText={(value) => handleChanges("email", value)}
                            />
                        </FormControl>
                        <FormControl w="80%">

                            <Input type="password"
                                placeholder="password"
                                bold
                                bg="muted.200"
                                size="md"
                                onChangeText={(value) => handleChanges("password", value)}
                            />
                        </FormControl>
                        <Button variant="danger" bg="error.600" w="80%" mt="10"  onPress={handlelogin}>
                            <Text bold color="white">Login</Text>
                        </Button>
                    </Center>
                    <Center>
                    <Text>
                        New Users? {" "}
                        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                            <Text color="error.600" bold mt="2">
                                Register
                            </Text>
                        </TouchableOpacity>
                    </Text>
                    </Center>
                </VStack>
        </NativeBaseProvider>
    );
}
