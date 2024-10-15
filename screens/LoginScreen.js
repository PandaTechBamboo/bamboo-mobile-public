import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreenFlex from '../utils/FlexItems';
import SignIn from '../components/LoginScreen/SignIn'
import TitleText from '../components/LoginScreen/TitleText'
import PandaImage from '../components/LoginScreen/PandaImage'
import SignUpGuest from '../components/LoginScreen/SignUpGuest'
import React from 'react';
import localData from '../models/LocalData'
import axios from 'axios'


export default function LoginScreen({navigation}) {
	const flexItems = LoginScreenFlex;
	localData.initializeModel();

	return (
		<View style={styles.container}>
			<View style={{flex: flexItems.gapOne}}/>
			<TitleText/>

			<View style={{flex: flexItems.gapTwo}}/>
			<PandaImage/>

			<View style={{flex: flexItems.gapThree}}/> 
			<SignIn navigation={navigation}/>

			<View style={{flex: flexItems.gapSix}}/>
			<SignUpGuest navigation = {navigation}/>

			<View style={{flex: flexItems.gapEight}}/>


			<StatusBar style="auto" />
		
		</View>
	);
}

const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#FFFFFF',
			alignItems: 'center',
			flexDirection: 'column',
		},
	}
);
  
