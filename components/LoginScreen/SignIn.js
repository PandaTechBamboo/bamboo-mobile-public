import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import SignInButton from './SignInButton'
import LoginScreenFlex from '../../utils/FlexItems'

import React, { useState } from 'react';


const textFontSize = 15;
const flexItems = LoginScreenFlex;


function SignIn({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const map = new Map();
    map.set("username", "password");
    
    return (
        <View style={styles.container}>
            
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Username . . ."
                fontSize={textFontSize}
                placeholderTextColor="#b8b8b8"
                value={username}
                onChangeText={text => setUsername(text)}
                borderWidth={2}
            />

            <View style={{flex: flexItems.gapFour}}/>

            <TextInput
                style={styles.input}
                placeholder="Password . . ."
                fontSize={textFontSize}
                placeholderTextColor="#b8b8b8"
                value={password}
                secureTextEntry
                onChangeText={text => setPassword(text)}
                borderWidth={2}
            />
            </View>

            <View style={{flex: flexItems.gapFive}}/>

            <SignInButton textFontSize={textFontSize} username={username} password={password} map={map} navigation={navigation}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 220,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    inputContainer: {
      width: '80%',
      justifyContent: 'center',
      flex: flexItems.inputContainerFlex,
      fontSize: textFontSize,
    },
    input: {
        width: 300,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily: 'Roboto-Regular',
        
        color: '#5e5e5e',
        backgroundColor: '#ebebeb',
        paddingLeft: 15,
        fontSize: textFontSize,
        flex: flexItems.inputFlex,
    },
  })

export default SignIn;