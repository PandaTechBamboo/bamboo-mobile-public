import React from 'react'

import {View, StyleSheet, Text} from 'react-native'
import { useFonts } from 'expo-font';

import WeekEvents from './WeekEvents'
import WeekDays from './WeekDays'
import colors from '../../utils/colors'
import localData from '../../models/LocalData'
import Log from '../../utils/Log'

function MonthView ({navigation}) {
    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../../assets/fonts/Itim-Regular.ttf'),
    });

    let date = localData.currentDate; 
	let firstDayDateTime = new Date(date.getFullYear(), date.getMonth(), 1);
    Log("firstDayDateTime: " + firstDayDateTime)
    let firstDay = firstDayDateTime.getDay();
    let firstDate = firstDayDateTime.getDate();

	let prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
    Log("prevMonthLastDay: " + prevMonthLastDay)
	let lastDateTime = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    Log("lastDateTime: " + lastDateTime)
    let lastDate = lastDateTime.getDate()
    Log("LastDate: " + lastDate)

    function RowGap() {
        return <View style={styles.rowGap}/>
    }

    function RenderWeekEvents({weekNumber, weekDayNumbers, daysWithinMonth}) {
        return (
            <>
                <WeekEvents 
                    weekDayNumbers={weekDayNumbers} 
                    weekNumber={weekNumber} 
                    navigation={navigation} 
                    daysWithinMonth={daysWithinMonth}
                />
                {weekNumber != 6 ? <RowGap/> : <></>}
            </>
        )
    }

    let daysWithinMonth = [];
    let weeks=[];

    function initializeWeeks () {
        let startingDate = firstDate - firstDay - 1;
        let inCurrentMonth = true;
        if (startingDate < 0) {
            startingDate = prevMonthLastDay.getDate() + startingDate + 1;
            inCurrentMonth = false;
        } else {
            startingDate = 1;
        }

        let dateIterator = startingDate;

        for (let week = 0; week < 6; week++) {
            let thisWeek = [];
            let daysInMonth = [];
            for (let x = 0; x < 7; x++) {
                thisWeek.push(dateIterator);
                dateIterator++;
                if (inCurrentMonth == false) {
                    if (dateIterator > prevMonthLastDay.getDate()) {
                        dateIterator = 1;
                        inCurrentMonth = true;
                    }
                    daysInMonth.push(false)
                } else {
                    if (dateIterator > lastDate) {
                        dateIterator = 1;
                        inCurrentMonth = false;
                    }
                    daysInMonth.push(true);
                    
                }
            }
            weeks.push(thisWeek);
            daysWithinMonth.push(daysInMonth);
        }

        Log(weeks);
        Log(daysWithinMonth);
    }

    initializeWeeks();


    const weekNumbers = ['1', '2', '3', '4', '5', '6'];

    return(
        <View style={styles.row}>
            <View style={styles.container}>
                <View style={styles.sideGap}/>
                <View style={styles.calendarView}>
                    <WeekDays/>
                    <RowGap/>

                    {weekNumbers.map((weekNumber) => 
                        <RenderWeekEvents 
                            key = {weekNumber}
                            weekNumber={weekNumber}
                            weekDayNumbers={weeks[weekNumber - 1]}
                            daysWithinMonth = {daysWithinMonth[weekNumber - 1]}
                        />
                    )}
                </View>
                <View style={styles.sideGap}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
        flex: 470,
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        width: '100%',
        maxWidth: '700px',
        height: '100%',
    },
    calendarView: {
        flexDirection: 'column',
        backgroundColor: colors.white,
        flex: 37,
    },
    sideGap: {
        flex: 1,
        backgroundColor: colors.white,
    },
    rowGap: {
        flex: 5,
        backgroundColor: colors.white,
    },
})

export default MonthView;