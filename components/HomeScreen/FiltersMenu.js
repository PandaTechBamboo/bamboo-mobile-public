import {View, StyleSheet} from 'react-native'
import Log from '../../utils/Log'

function FiltersMenu({showFilterDropDown}) {
    Log("showFilterDropDown: " + showFilterDropDown)
	const localStyles = StyleSheet.create({
		container: {
			flexDirection: 'row',
            zIndex: showFilterDropDown? 10 : -5,
            backgroundColor: "#FF00FF", 

		},
		menu: {
			position: 'absolute', 
			top: 120, 
			height: 200, 
            width: 200,
			flex: 37,
            zIndex: showFilterDropDown? 11 : -5,
		},
		sideGap: {
			flex: 1,
		}

	})
	
    return (
        <View style={localStyles.container}>
            <View style={localStyles.sideGap}/>
            <View style={localStyles.menu}>
			
            </View>
            <View style={localStyles.sideGap}/>
        </View>
		
	)
}

export default FiltersMenu;