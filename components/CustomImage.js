import { StyleSheet, Image } from 'react-native';

export default function CustomImage({ theme, source }) {
  const stylesMap = new Map([
    ["panda-image", styles.pandaImage],
    ["calendar", styles.calendar],
    ["searchIcon", styles.searchIcon],
    ["filters", styles.filters],
    ["add-button", styles.addButton],
    ["socials", styles.socials],
    ["profile", styles.profile],
    ['back-arrow', styles.default],
    ['left-arrow', styles.arrow],
    ['right-arrow', styles.arrow],
    ['event-more', styles.eventMore]
  ]);

  const selectedStyle = stylesMap.get(theme) || styles.default;

  return (
    <Image source={source} style={selectedStyle} resizeMode="contain"/>
  );
}

const styles = StyleSheet.create({
  default: {
    width: 40,
    height: 40,
  },
  pandaImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  image: {
    width: 160,
    height: 190,
    borderRadius: 18,
  },
  addButton : {
    height: 40,
    width: 40,
  },
  calendar: {
    height: 40,
    width: 36,
  },
  searchIcon: {
    height: 35,
    width: 35,
    marginLeft: 10,
  },
  filters : {
    height: 40,
    width: 40,
  },
  socials: {
    height: 40,
    width: 40,
  },
  profile: {
    width: 40,
    height: 40,
  },
  arrow: {
    height: 40, 
    width: '100%',
  },
  eventMore: {
    height: 20,
    width: 20,
  }
});
