import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CustomImage from './CustomImage'

const CustomButton = ({ text, theme, onPress }) => {
  let stylesMap = new Map([
    ['calendar', styles.calendar],
    ['filters', styles.filters],
    ['add-button', styles.addButton],
    ['socials', styles.socials],
    ['profile', styles.profile],
    ['back-arrow', styles.default],
    ['left-arrow', styles.arrow],
    ['right-arrow', styles.arrow],
    ['event-more', styles.eventMore]
  ]);

  let assetsMap = new Map([
    ['calendar', require('../assets/images/calendar-icon.png')],
    ['filters', require('../assets/images/filters-icon.png')],
    ['add-button', require('../assets/images/add-button.png')],
    ['socials', require('../assets/images/social-network.png')],
    ['profile', require('../assets/images/profile-icon.png')],
    ['back-arrow', require('../assets/images/back-arrow.png')],
    ['left-arrow', require('../assets/images/left-arrow-icon.png')],
    ['right-arrow', require('../assets/images/right-arrow-icon.png')],
    ['event-more', require('../assets/images/more-down-button.png')]
  ]);

  const selectedStyle = stylesMap.get(theme) || styles.default;
  const selectedAsset = assetsMap.get(theme) || require('../assets/images/calendar-icon.png');


  return (
    <TouchableOpacity style = {selectedStyle} onPress={onPress}>
      <CustomImage theme = {theme} source={selectedAsset}/>
    </TouchableOpacity>
  ) 
}

const styles = StyleSheet.create({
  default: {

  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
  calendar: {
    height: 20,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filtersContainer: {
    maxWidth: 50,
  },
  filters: {
  },
  toMonthNavigation: {

  },
  addButton :{
  
  },
  eventMore : {
    flex: 1,
  },
  socials: {
    flex: 1,
    alignItems: 'center'
  },
  profile: {
    flex: 1,
    alignItems: 'center'
  },
  arrow: {
    flex: 2,
  }
});

export default CustomButton;