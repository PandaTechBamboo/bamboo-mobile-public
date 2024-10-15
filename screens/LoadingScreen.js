import localData from '../models/LocalData'
import Log from '../utils/Log'
import {useEffect} from 'react'

function LoadingScreen({navigation}) {
    Log("LoadingScreen")
    useEffect(() => {
        navigation.navigate(localData.goToScreen)
    })
    return (<></>)
}

export default LoadingScreen;