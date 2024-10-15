import React from 'react'

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Log from '../../utils/Log'

import localData from '../../models/LocalData'

function WeekEvents({weekDayNumbers, weekNumber, navigation, daysWithinMonth}) {

    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../../assets/fonts/Itim-Regular.ttf'),
    });

    function Day({dayInTheWeek, navigation}) {
        const dateNumber = weekDayNumbers[dayInTheWeek];
        const isWithinMonth = daysWithinMonth[dayInTheWeek];
        const currentDate = localData.currentDate;

        let bottomColor = daysWithinMonth[dayInTheWeek] == false ? "#F2F2F2" : '#D9D9D9';
        let bottomWidth = checkSameDayConditions()? 5 : 0;

        

        function checkSameDayConditions() {
            const phoneDate = localData.phoneDate;
            return (dateNumber == phoneDate.getDate() && 
                isWithinMonth && 
                currentDate.getMonth() == phoneDate.getMonth() &&
                currentDate.getYear() == phoneDate.getYear())
        }

        const localStyles = StyleSheet.create({
            bottomContainer: {
                flex: 50, 
                backgroundColor: bottomColor, 
                borderColor: "#7FB570", 
                borderWidth: bottomWidth, 
                justifyContent: 'center',
                alignItems: 'center',
            }
        })

        const dayEventsNumber = localData.getEventsNumber(
            currentDate.getFullYear(), 
            currentDate.getMonth(),
            weekDayNumbers[dayInTheWeek],
            daysWithinMonth[dayInTheWeek])

        function goToDayScren() {
            currentDate.setDate(dateNumber);
            if (!isWithinMonth) {
                let modifier = (dateNumber < 15) ? - 1 : 1;
                currentDate.setMonth(currentDate.getMonth() + modifier);
            }
            console.log("Selected day: " + currentDate)
            localData.dayEventsNumber = dayEventsNumber;
            navigation.navigate('Day')
        }

        return (
            <TouchableOpacity style={styles.dayContainer} onPress={() => goToDayScren()}>
                <View style={styles.dayTop}>
                    <Text style={styles.topText}>{weekDayNumbers[dayInTheWeek]}</Text>
                </View>

                <View style={localStyles.bottomContainer}>
                    <Text style={styles.bottomText}>{dayEventsNumber}</Text>
                </View>
                
            </TouchableOpacity>
        )
    }

    function ColumnGap() {
        return <View style={styles.columnGap}/>
    }

    const days = [0, 1, 2, 3, 4, 5, 6];

    function RenderColumns({dayInTheWeek}) {
        return (
            <>
                <Day dayInTheWeek={dayInTheWeek} navigation={navigation}/>
                {dayInTheWeek != 6 ? <ColumnGap/> : <></>}
            </>
        )
    }

    return (
        <View style={styles.container}>
            {days.map((dayInTheWeek) => <RenderColumns key={dayInTheWeek} dayInTheWeek={dayInTheWeek}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 70,
    },
    dayContainer: {
        flex: 50,
        flexDirection: 'column',

    },
    dayTop: {
        flex: 20,
        backgroundColor: '#000000',
        alignItems: 'center'

    },
    topText: {
        color: '#FFFFFF',
        fontFamily: 'Itim-Regular',
        fontSize: 15,
        textAlgin: 'center',

    
    },
    bottomText: {
        color: '#000000',
        fontFamily: 'Itim-Regular',
        textAlgin: 'center',
        fontSize: 20,

    },
    columnGap: {
        flex: 4,
        backgroundColor: '#FFFFFF',
    }
})

export default WeekEvents;