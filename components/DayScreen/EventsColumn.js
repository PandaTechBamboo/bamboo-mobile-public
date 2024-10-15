import {StyleSheet, View, FlatList} from 'react-native'

import EventBox from './EventBox'
import localData from '../../models/LocalData'
import colors from '../../utils/colors'

function SideGap() {
    return (<View style={{flex: 1}}/>)
}

function EventsColumn() {
    console.log("EventsArray:")
    console.log(localData.getDayEvents());
    return (
        <View style={styles.container}>
            <SideGap/>
            <View style={{flex: 37}}>
                <FlatList
                    data={localData.getDayEvents()}
                    renderItem={(event) => <EventBox event={event} />}
                    keyExtractor={(item) => item.title}
                    style={styles.flatlist}
                    contentContainerStyle ={styles.listContainer}
                />
            </View>
            <SideGap/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 470,
        flexDirection: 'row',
    },
    flatlist: {
        flex: 37,
        flexDirection: 'column',
    },
    listContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    }
})

export default EventsColumn;