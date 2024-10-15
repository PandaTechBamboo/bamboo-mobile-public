import Button from './components/CustomButton';

import CustomImage from './components/CustomImage';

import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

const placeHolderImage = require('./assets/images/panda-with-highlight.png');


export default function CreateEvent() {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true, 
        quality: 1,
      });
  
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      } else {
        alert('You did not select any image.');
      }
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>
            BAMBOO
          </Text>
        </View>
  
        <View style={styles.imageContainer}>
          <CustomImage source={selectedImage}/>
        </View>
  
        <View style={styles.footerContainer}>
          <Button theme = "primary" label="Choose a photo" onPress = {pickImageAsync}/>
          <Button label="Use this photo" />
        </View>
        
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    title:{
      color: '#000',
      marginTop: 50,
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      paddingTop: 58,
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
    
  });
  
