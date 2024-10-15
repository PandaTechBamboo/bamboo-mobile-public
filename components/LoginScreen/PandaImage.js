import {View, StyleSheet} from 'react-native'
import CustomImage from '../CustomImage'
import LoginScreenFlex from '../../utils/FlexItems'
const flexItems = LoginScreenFlex;

function PandaImage() {
  const pandaImage = require('../../assets/images/panda-with-highlight.png');

  return (
    <View style={styles.container}>
      <CustomImage theme="panda-image" source={pandaImage}/>
    </View>
  )
    
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: flexItems.imageFlex,
  },
})

export default PandaImage;