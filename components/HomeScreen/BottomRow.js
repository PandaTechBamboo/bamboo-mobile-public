import React from 'react'

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import colors from '../../utils/colors'
import CustomButton from '../CustomButton'


function MyEvents({navigation}) {
    const localStyles = StyleSheet.create({
        container: {
            flex: 3,
        },
        touchableOpacity: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',

        },
        text: {
            textAlign: 'center',
            fontFamily: 'Itim-Regular',
            color: colors.filtersGray,
            fontSize: 22,
        }
    })
    return (
        <View style={localStyles.container}>
            <TouchableOpacity style={localStyles.touchableOpacity} onPress={() => navigation.navigate('MyEvents')}>
                <Text style={localStyles.text}>
                    My Events
                </Text>
            </TouchableOpacity>
        </View>
    )
}


function AddButton({navigation}) {
    const localStyles = StyleSheet.create({
        container: {
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
        }
    })
    return(
        <View style={localStyles.container}>
            <CustomButton theme="add-button" onPress={() => navigation.navigate('AddEvent')}/>
        </View>
    )
}
    

function SocialsSetting({navigation}) {
    const localStyles = StyleSheet.create({
        container: {
            flex: 3,
            flexDirection: 'row',
            alignItems: 'center',
        }
    })
    return(
        <View style={localStyles.container}>
            <CustomButton theme = "socials" onPress={() => navigation.navigate('Socials')}/>
            <CustomButton theme = "profile" onPress={() => navigation.navigate('Profile')}/>
        </View>
    )
}
    

function BottomRow({navigation}) {
    return (
        <View style={styles.container}>
            <MyEvents navigation={navigation}/>
            <AddButton navigation={navigation}/>
            <SocialsSetting navigation={navigation}/>
        </View>
    )
}

export default BottomRow;

const styles = StyleSheet.create({
    container: {
        flex: 90,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
    }
})