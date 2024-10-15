import {View, Text, StyleSheet} from 'react-native'
import { useFonts } from 'expo-font';
import LoginScreenFlex from '../../utils/FlexItems'
const flexItems = LoginScreenFlex;

function TitleText(){
  const [fontsLoaded] = useFonts({
    'IrishGrover-Regular': require('../../assets/fonts/IrishGrover-Regular.ttf'),
    'Itim-Regular' : require('../../assets/fonts/Itim-Regular.ttf'),
    'Besley-Regular' : require('../../assets/fonts/Besley-Regular.ttf'),
    'Besley-Italic' : require('../../assets/fonts/Besley-Italic.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={titleStyles.titleContainer}>
      <Text style={titleStyles.title}>
        BAMBOO
      </Text>
    </View>
  )
}

const titleStyles = StyleSheet.create({
  titleContainer:{
    flex: flexItems.titleFlex,
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'IrishGrover-Regular',
    color: '#777070',
    flex: 1,
    fontSize: 60,
  },
})

export default TitleText;