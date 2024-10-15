import React, {useState} from 'react'

import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import { useFonts } from 'expo-font';
import colors from '../../utils/colors'
import localData from '../../models/LocalData'
import { useFocusEffect } from '@react-navigation/native';
import CustomButton from '../CustomButton';




function TotalEvents({onRefresh}) {
    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../../assets/fonts/Itim-Regular.ttf'),
    });

    const [refreshKey, setRefreshKey] = useState(0); // Key to force re-render

    function changeMonth(isRight) {
        localData.currentDate.setMonth((isRight) ? 
            localData.currentDate.getMonth() + 1 :
            localData.currentDate.getMonth() - 1);
        onRefresh();
    }

    return (
        <View style={styles.container} key={refreshKey}>
            <View style={{flex: 1}}/>
            <CustomButton theme="left-arrow" onPress={() => changeMonth(false)}/>
            <View style={styles.textContainer}>
                <Text style={styles.number}>{localData.getMonthEventsTotal()}</Text>
                <Text style={styles.other}> Events</Text>
            </View>
            <CustomButton theme="right-arrow" onPress={() => changeMonth(true)}/>
            <View style={{flex: 1}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    number: {
        fontSize: 25,
        fontFamily: 'Itim-Regular',
        color: '#000000'
    },
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 5,

    },
    other: {
        fontSize: 25,
        fontFamily: 'Itim-Regular',
        color: '#505050'
    },
    container: {
        alignItems:'center', 
        justifyContent:'center',
        flex: 40,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,

    },
})

export default TotalEvents;