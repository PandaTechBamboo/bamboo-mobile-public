import {StyleSheet, View, Text} from 'react-native'
import CustomButtom from '../CustomButton'
import colors from '../../utils/colors'
import localData from '../../models/LocalData'



function EventsToday ({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{flex: 2, alignItems: 'center'}}>
                <CustomButtom theme="back-arrow" onPress={() => navigation.navigate('Home')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.number}>
                    {localData.dayEventsNumber == "" ? 0 : localData.dayEventsNumber}
                </Text>
                <Text style={styles.other}> Events</Text>
            </View>
            <View style={{flex: 2}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    number: {
        fontSize: 25,
        fontFamily: 'Itim-Regular',
        color: '#000000',
    },
    textContainer:{
        flexDirection: 'row',
        flex: 5,
        justifyContent: 'center',
    },
    other: {
        fontSize: 25,
        fontFamily: 'Itim-Regular',
        color: '#505050',
    },
    container: {
        alignItems:'center', 
        justifyContent:'center',
        flex: 40,
        backgroundColor: colors.white,
        width: '100%',
        flexDirection: 'row',
    },
})

export default EventsToday;