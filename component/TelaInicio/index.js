import React from "react";
import { View, Image, Text, Pressable } from 'react-native'

import imgFundo from '../../assets/logo.png';
import imgConsole from '../../assets/console.png';
import imgJogo from '../../assets/jogo-1.png';
import imgXcloud from '../../assets/xcloud-1.png';

export default function TelaInicio (props) {
    return (
        <View>
        < Image source={ imgFundo } />
        <Text>Xbox</Text>
        <Text> Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer </Text>

        <Pressable
        onPress ={ () => { props.navigation.navigate("Consoles ") } } >
        

        <Image source={ imgConsole } />
        <Text> Conheça os Consoles</Text> 
        </Pressable>

        </View>
    

    )
       
}