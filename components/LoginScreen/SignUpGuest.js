
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useFonts } from 'expo-font';

import LoginScreenFlex from '../../utils/FlexItems'
import colors from '../../utils/colors'

const flexItems = LoginScreenFlex;

function SignUpGuest({navigation}) {
  const [fontsLoaded] = useFonts({
    'IrishGrover-Regular': require('../../assets/fonts/IrishGrover-Regular.ttf'),
    'Itim-Regular' : require('../../assets/fonts/Itim-Regular.ttf'),
    'Besley-Regular' : require('../../assets/fonts/Besley-Regular.ttf'),
    'Besley-Italic' : require('../../assets/fonts/Besley-Italic.ttf')
  });



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{flex: flexItems.gapSeven}}/>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Guest Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const fontSize = 20;

const styles = StyleSheet.create({
  container: {
    flex: flexItems.buttonsContainerFlex,
  },
  buttonContainer: {
    width: 300,
    flex: flexItems.buttonFlex,

    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    fontFamily: 'Itim-Regular',
    backgroundColor: colors.gray2,
    paddingLeft: 15,
    fontStyle: 'italic',

    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Itim-Regular',
    fontSize: fontSize,
  }
})


export default SignUpGuest;