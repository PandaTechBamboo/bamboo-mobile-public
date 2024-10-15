import {StyleSheet, View, Text} from 'react-native'
import colors from '../../utils/colors'
import CustomButton from '../CustomButton';


function TopRow({eventTitle}) {
    const localStyles = StyleSheet.create({
        text: {
            textAlign: 'center', 
            color: colors.white, 
            fontFamily: 'Itim-Regular',
            fontSize: 20,
        },
        container: {
            flexDirection: 'row',
        },
        outerContainer: {
            flexDirection: 'column',
            flex: 3,
            justifyContent: 'center',
            alignContent: 'center',
        }
    })
    return (
        <View style={localStyles.outerContainer}>
            <View style={localStyles.container}>
                <View style={{flex: 20}}>
                    <Text style={localStyles.text}>
                        {eventTitle}
                    </Text>
                </View>
                
                <CustomButton theme="event-more"/>
            </View>
        </View>
        
    )
}

function BottomRow({navigation, event}){
    const localStyles = StyleSheet.create({
        container: {
            flex: 2,
            flexDirection: 'row',
        },
    })

    function RowText({contents}) {
        return (
            <View style={{flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: colors.white, fontFamily: 'Itim-Regular'}}>
                    {contents}
                </Text>
            </View>
        )
    }

    function RowGap() {
        return <View style={{flex: 1}}/>
    }

    return (
        <View style={localStyles.container}>
            <RowGap/>
            <RowText contents={event.start.time != -1 ? event.start.time : "N/A"}/>
            <RowGap/>
            <RowText contents={event.start.location ? event.start.location : "N/A"}/>
            <RowGap/>
            <RowText contents={event.author}/>
            <RowGap/>
        </View>
    )
}


function EventBox({navigation, event}) {
    console.log("Event: ");
    console.log(event.item.title);
    console.log("Event title: " + event.item.title);
    return (
        <View>
            <View style={styles.container}>
                <TopRow eventTitle = {event.item.title}/>
                <BottomRow event={event.item}/>
            </View>
            <View style={{marginTop: 10}}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 500,
        backgroundColor: colors.eventBox,
        color: colors.white,
    }
})

export default EventBox;