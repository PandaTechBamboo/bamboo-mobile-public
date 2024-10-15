// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Log from '../utils/Log'

import Constants from 'expo-constants';
const serverAddress = Constants.manifest.extra.SERVER_ADDRESS;

const Get = () => {
    const [data, setData] = useState('');

    const getData = () => {
        fetch(`http://${serverAddress}:3000/get/day`)
            .then(response => response.json())
            .then(data => {
                Log('Success: ', data);
                setData(data);
            })
            .catch((error) => console.error('Error:', error));
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        {data}
    );
};

export default Get;
