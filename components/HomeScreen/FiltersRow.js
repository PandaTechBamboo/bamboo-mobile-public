import React from 'react'
import {View, StyleSheet, FlatList, Text, Platform, TouchableOpacity} from 'react-native'
import colors from '../../utils/colors'
import CustomButton from '../CustomButton'
import Log from '../../utils/Log'

let filters;

fetch('file.json')
    .then(response => response.json())
    .then(jsonResponse => {
        Log('jsonResponse: ' + jsonResponse);
        filters = JSON.parse(jsonResponse);
        Log(filters);
    })

const filterContainerLengths = new Map();
filterContainerLengths.set("Distance", "4")

function showIndividualFilter(filterName) {
    
}

function Filter({filterName}) {
    const localStyles = StyleSheet.create({
        container: {
            backgroundColor: colors.filtersGray,
            borderRadius: 50,
            height: 'auto',
            width: 100,
            marginLeft: 10,

        },
        text: {
            color: colors.white,
            textAlign: 'center',
            fontFamily: 'Itim-Regular',
            fontSize: 20,
        }
    })
    return(
        <TouchableOpacity style={localStyles.container} onPress={showIndividualFilter(filterName)}>
            <Text style={localStyles.text}>{filterName}</Text>
        </TouchableOpacity>
    )
}

const filterNames = ["Distance", "Times", "Duration", "Incentives"]

function FiltersList() {
    const localStyles = StyleSheet.create({
        container: {
            alignItems: 'center',
        }
    })
    return(
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true} 
            style
            data={filterNames}
            renderItem={({ item }) => <Filter filterName={item} />}
            keyExtractor={(item) => item}
            contentContainerStyle ={localStyles.container}
        />
    )
}

function FiltersRow({setShowFilterDropDown}) {
    return (
        <View style={styles.outsideContainer}>
            <View style={styles.sideGap}/>
            <View style={styles.filterRow}>
                <View style={styles.filterButtonContainer}>
                    <CustomButton theme="filters" onPress={() => setShowFilterDropDown(true)}/>
                </View>
                <FiltersList/>
            </View>
            <View style={styles.sideGap}/>
        </View>
    )
}

export default FiltersRow;


const styles = StyleSheet.create({
    outsideContainer: {
        flex: 50,
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'row',
    },
    filterRow: {
        flex: 37,
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,


        ...Platform.select({
            ios: {
                // iOS shadow properties
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 5 }, // Shadow only at the bottom
                shadowOpacity: 0.3,
                shadowRadius: 3,
            },
            android: {
                // Android shadow property
                elevation: 10, // Higher elevation for more pronounced shadow
                shadowColor: '#000000', // Elevation doesn't use shadow properties directly, but specifying it for consistency
            },
        }),
    },
    sideGap: {
        flex: 1,
    },
    filterButtonContainer: {
        width: 40,
        marginLeft: 10,
        justifyContent: 'center',
    }
})


