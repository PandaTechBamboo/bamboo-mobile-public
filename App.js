import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MonthNavigationScreen from './screens/MonthNavigationScreen'
import DayScreen from './screens/DayScreen'
import MyEventsScreen from './screens/MyEventsScreen'
import AddEventScreen from './screens/AddEventScreen'
import SocialsScreen from './screens/SocialsScreen'
import ProfileScreen from './screens/ProfileScreen'
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import LoadingScreen from './screens/LoadingScreen'



/*Commands to remember
npx expo start
*/

const Stack = createNativeStackNavigator();

function App() {
  console.log("------------------------------------------------New app------------------------------------------------------------");
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component = {LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="MonthNavigation" component = {MonthNavigationScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Day" component = {DayScreen} options = {{headerShown: false}}/>
            <Stack.Screen name="Loading" component = {LoadingScreen} options = {{headerShown: false}}/>

            <Stack.Screen name="MyEvents" component = {MyEventsScreen} options = {{headerShown: false}}/>
            <Stack.Screen name="AddEvent" component = {AddEventScreen} options = {{headerShown: false}}/>
            <Stack.Screen name="Socials" component = {SocialsScreen} options = {{headerShown: false}}/>
            <Stack.Screen name="Profile" component = {ProfileScreen} options = {{headerShown: false}}/>
            
          </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
    
  );
}

export default App;

/**
 * <Stack.Screen name="MyEvents" component = {MyEventsScreen} options = {{headerShown: false}}/>
            <Stack.Screen name="AddEvent" component = {AddEventScreen} options = {{headerShown: false}}/>
            <Stack.Screen name="Socials" component = {SocialsScreen} options = {{headerShown: false}}/>
            <Stack.Screen name="Profile" component = {ProfileScreen} options = {{headerShown: false}}/>
 */
