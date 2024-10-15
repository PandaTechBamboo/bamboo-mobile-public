import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors'
import { useFonts } from 'expo-font';
import axios from 'axios'
import Log from '../../utils/Log'

import Constants from 'expo-constants';

const serverAddress = Constants.manifest.extra.SERVER_ADDRESS;


function SignInButton({navigation, username, password, map}) {
  const [fontsLoaded] = useFonts({
    'Itim-Regular' : require('../../assets/fonts/Itim-Regular.ttf'),
  });

  const checkLogin = () => {
    Log("checkLogin")
    
    axios.post(`http://${serverAddress}:3001/misc`, {})
      .then(res => {
        Log(res);
      })

    axios.post(`http://${serverAddress}:3001/login-validation`, {username, password})
    .then(res => {
      Log("Got a response")
      Log("res:" + res.data.validation)
      if (res.data.validation) {
        navigation.navigate('Home')
      } else {
        alert('Your password is not correct')
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert('An error occurred while trying to sign in');
    });
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress = {checkLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    aspectRatio: 1,
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#A3A3A3',
    backgroundColor: colors.gray2,
    flexDirection: 'column',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 100,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Itim-Regular',
  },
});



  export default SignInButton;


  