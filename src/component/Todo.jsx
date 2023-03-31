import React from 'react'
import todoImg from '../img/todo.png'
import text from '../img/text-todo.png'
import { Image, Center} from 'native-base';

export default function Todo() {
    return <Center>
    <Image source={todoImg} alt="Alternate Text" size="250" />
    <Image source={text} alt="Alternate Text" height={"35"}  width={"210"}/>
  </Center>;
}