import React, {useState, useEffect} from 'react';

import {  View, StyleSheet, SafeAreaView } from 'react-native';

import TopRow from '../components/HomeScreen/TopRow'
import FiltersRow from '../components/HomeScreen/FiltersRow'
import TotalEvents from '../components/HomeScreen/TotalEvents'
import { useFonts } from 'expo-font';
import MonthView from '../components/HomeScreen/MonthView'
import SearchBar from '../components/HomeScreen/SearchBar'
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import FiltersMenu from '../components/HomeScreen/FiltersMenu'
import Gap from '../components/Gap'

import Log from '../utils/Log'


import colors from '../utils/colors'

import BottomRow from '../components/HomeScreen/BottomRow'

function HomeScreen({ navigation }) {
	Log("HomeScreen")
	const [showFilterDropDown, setShowFilterDropDown] = useState(false)

	const onGestureEvent = (event) => {
		const { translationX, state } = event.nativeEvent;
	
		if (state === State.END) {
		  if (translationX > 50) {
			Log('Swiped right');
		  } else if (translationX < -50) {
			Log('Swiped left');
		  }
		}
	};


	const [fontsLoaded] = useFonts({
    'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
        'Besley-Regular' : require('../assets/fonts/Besley-Regular.ttf'),
        'Besley-Italic' : require('../assets/fonts/Besley-Italic.ttf')
	});

	/*
	if (!fontsLoaded) {
			return <AppLoading/>
	}*/
    
	

	const [refreshKey, setRefreshKey] = useState(0);

	const handleRefresh = () => {
		// Increment the key to trigger a re-render
		setRefreshKey(prevKey => prevKey + 1);
	};

	return (
		<PanGestureHandler onGestureEvent={onGestureEvent}>
			<SafeAreaView style={styles.safeAreaView}>
				<View style={styles.width}>
					<View style={styles.innerWidth}>
						<TopRow navigation={navigation} onRefresh={handleRefresh} isMonth={true}/>
						<Gap/>

						<FiltersRow setShowFilterDropDown={setShowFilterDropDown}/>
						<Gap/>

						<SearchBar/>
						<Gap/>

						<TotalEvents onRefresh={handleRefresh}/>
						<Gap/>

						<MonthView navigation={navigation}/>
						<Gap/>

						<BottomRow navigation={navigation}/>
					</View>
					<FiltersMenu showFilterDropDown={showFilterDropDown}/>
				</View>
			</SafeAreaView>
		</PanGestureHandler>
	);
}

export default HomeScreen;

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