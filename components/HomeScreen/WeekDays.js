import React from 'react'

import {View, StyleSheet, Text} from 'react-native'
import { useFonts } from 'expo-font';

import colors from '../../utils/colors'

function WeekDays() {
    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../../assets/fonts/Itim-Regular.ttf'),
    });


    function Day({label}) {
        return(
            <View style={dayStyles.dayContainer}>
                <Text style={dayStyles.text}>{label}</Text>
            </View>
        )
    }

    const dayStyles = StyleSheet.create({
        dayContainer: {
            flex: 50,
            backgroundColor: colors.gray2,
        },
        text: {
            fontFamily: 'Itim-Regular',
            fontSize: 15,
            color: colors.white,
            textAlign: 'center'

        }
    })

    let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


    function RenderDay({day}) {
        return (
            <>
                <Day label={day}/>
                {day === "Sat" ? <></> : <View style={styles.gap}/>}
            </>
        )
    }

    return(
        <View style={styles.container}>
            {dayNames.map((day) => <RenderDay key={day} day={day}/>)}
        </View>
    )
}
    

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 20,
    },
    gap: {
        flex: 4,
        backgroundColor: colors.white
    },
})

export default WeekDays;