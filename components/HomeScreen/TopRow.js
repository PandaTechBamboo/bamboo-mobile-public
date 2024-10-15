import React from 'react';

import { TouchableOpacity, View, Text, Button, StyleSheet } from 'react-native';

import CustomButton from '../CustomButton'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import localData from '../../models/LocalData'

function TopRow({ navigation, onRefresh, isMonth }) {
    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../../assets/fonts/Itim-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    function goToPhoneDate() {
        localData.resetDate();
        onRefresh();
    }

    const text = (isMonth) ? 
        localData.getMonth() + " " + localData.currentDate.getFullYear() :
        localData.getMonth() + " " + localData.currentDate.getDate();

  return (
    <View id = "top-row" style={styles.topRow}>
        <Text id="title" style={styles.leftText} >BAMBOO</Text>

        <View style={styles.calendarContainer}>
            <CustomButton id="calendar-icon" theme='calendar' onPress={() => goToPhoneDate()}/>
        </View>


        <TouchableOpacity id = "current-day" onPress={() => navigation.navigate('Details')} style={styles.dayContainer}>
            <Text style = {styles.rightText}>{text}</Text>
        </TouchableOpacity>
    </View>  
  );
}

export default TopRow;

const styles = StyleSheet.create({
    calendarContainer: {
        flex: 1,
        alignItems: 'center',
    },
    topRow: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor: '#D9D9D9',
        flex: 70,
        fontSize: 32,
    },
    leftText: {
        color: '#777070',
        fontFamily: 'IrishGrover-Regular',
        fontSize: 30,
        flex: 4,
        textAlign: 'center',
    },

    rightText: {
        fontFamily: 'Itim-Regular',
        fontSize: 30,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    dayContainer: {
        flex: 4,
    }
})