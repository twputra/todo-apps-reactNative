import React from 'react'
import todoImg from '../img/todo.png'
import { Image, Center} from 'native-base';

export default function Todo() {
    return <Center>
    <Image source={todoImg} alt="Alternate Text" size="350" />
    </Center>;
}