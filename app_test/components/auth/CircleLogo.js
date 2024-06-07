import React from 'react';
import { View, Image } from 'react-native';

const CircleLogo = () => {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image 
                source={require('../../assets/favicon.png')}
                style={{width: 100, height: 100, marginVertical: 20}}
            />
        </View>
    )
}

export default CircleLogo;