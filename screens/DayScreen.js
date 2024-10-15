import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native'

import TopRow from '../components/HomeScreen/TopRow'
import FiltersRow from '../components/HomeScreen/FiltersRow'
import BottomRow from '../components/HomeScreen/BottomRow'
import React from 'react'

import CustomButtom from '../components/CustomButton'
import EventsToday from '../components/DayScreen/EventsToday'
import { useFonts } from 'expo-font';
import colors from '../utils/colors'

import SearchBar from '../components/HomeScreen/SearchBar'
import Gap from '../components/Gap'
import EventsColumn from '../components/DayScreen/EventsColumn'




function DayScreen({navigation}) {
    return(
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.width}>
                <View style={styles.innerWidth}>
                    <TopRow navigation={navigation} isMonth={false}/>
                    <Gap/>

                    <FiltersRow/>
                    <Gap/>

                    <SearchBar/>
                    <Gap/>

                    <EventsToday navigation={navigation}/>
                    <Gap/>

                    <EventsColumn/>
                    <Gap/>

                    <BottomRow/>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    innerWidth: {
		maxWidth: 400,
		height: '100%',
		width: '100%',
		justifyContent: 'center',
	},
	safeAreaView: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		backgroundColor: colors.gray1,
		alignItems: 'center',
		zIndex: 1,
	},
	width: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: colors.white,
	}
}) 

export default DayScreen;