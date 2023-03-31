import React from 'react'
import icon from '../img/profile.png'

import { Image, Center} from 'native-base';

export default function ProfileIcon() {
    return <Center mt="5">
    <Image source={icon} alt="Alternate Text" size="180" style={{width: 50, height: 50, borderWidth: 3, borderRadius: 100 /2}}  />
  </Center>;
}