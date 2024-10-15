import React, {useState} from 'react'
import { useFonts } from 'expo-font';

import {View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'
import CustomImage from '../CustomImage'
const searchIcon = require('../../assets/images/search-icon.png'); 


function SearchBar(navigation) {

    const [searchInput, setSearchInput] = useState('');


    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../../assets/fonts/Itim-Regular.ttf'),
    });

    /*<View id="search-bar" style={styles.searchBar}>
    <TouchableOpacity id="search-icon-container" style = {styles.searchIconContainer} onPress={() => navigation.navigate('')}>
        <Image id="search-icon" style = {styles.searchIcon} source = {searchIcon}/>
    </TouchableOpacity>
    <TextInput id="search" style={styles.search} placeholder="search" value={search} onChangeText={setSearch}/>
</View> */
    return (
        <View style={styles.container}>
            <View style={styles.gap}/>
            <View style={styles.searchContainer}>
                    <CustomImage theme="searchIcon" source={searchIcon}/>
                    
                    <TextInput 
                        style={styles.searchText}
                        placeholder="Search for an event..."
                        value={searchInput}
                        onChangeText={setSearchInput}
                    />

            </View>
            <View style={styles.gap}/>
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flex: 40,
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginTop: 0,
        width: '100%',
        maxWidth: '1000px'
    },
    gap: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        flex: 8,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
        height: '100%',
        alignItems: 'center',
    },
    searchText: {
        fontFamily: 'Itim-Regular',
        paddingLeft: 15,
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'Besley-Italic',
    }
})
