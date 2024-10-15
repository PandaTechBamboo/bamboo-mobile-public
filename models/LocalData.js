import axios from 'axios'
import Log from '../utils/Log'

import Constants from 'expo-constants';
const serverAddress = Constants.manifest.extra.SERVER_ADDRESS;

let eventsModel = new Map();

const localData = {}
localData.phoneDate = new Date(),
localData.currentDate = new Date(),
localData.goToScreen = 'Home',
localData.dayEventsNumber = 0;
    
localData.getMonth = function() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[localData.currentDate.getMonth()];
}
localData.setMonth = function(newMonth) {
    localData.currentDate.setMonth(newMonth);
}
localData.resetDate = function() {
    localData.currentDate = new Date();
}
localData.mapToArray = function(map) {
    return Array.from(map, ([key, value]) =>
        [key, value instanceof Map ? mapToArray(value) : value]
    )
}
localData.arrayToMap = function(arg) {
    Log("--------------------ArrayToMap----------------------------")
    Log(arg);
    const map = new Map();
    arg.forEach((value, key) => {
        const subMap = new Map(value);

        subMap.forEach((value, key) => {
            const subSubMap = new Map(value);
            subMap.set(key, subSubMap);
        })
        map.set(key, subMap);

    })
    return map;
}
localData.getMonthEventsTotal = function() {
    const currentDate = localData.currentDate;
    if (!eventsModel.has(currentDate.getFullYear()) || !eventsModel.get(currentDate.getFullYear()).has(currentDate.getMonth() + 1)) {
        return 0;
    }
    let total = 0;
    let daysMap = eventsModel.get(currentDate.getFullYear()).get(currentDate.getMonth() + 1);

    daysMap.forEach((eventsArray) => {
        total += eventsArray.length;
    })
    return total;
}

localData.getEventsNumber = function(year, month, day, inMonth) {
    year = Number(year)
    month = Number(month)
    day = Number(day)
    month += 1;

    Log("Param date: " + year + " " + month + " " + day)

    if (inMonth == false) {
        if (day < 15) {
            month += 1;
            if (month == 13) {
                month = 1;
            }
        } else {
            month -= 1;
            if (month == 0) {
                month = 12;
            }
        }
    }
    Log("New month: " + month);
    Log("Model: ");
    Log(eventsModel);


    function dayExists() {
        while(true) {
            if (!eventsModel.has(year)) {break;}
            if (!eventsModel.get(year).has(month)) {break;}
            if (!eventsModel.get(year).get(month).has(day)) {break;}
            return true;
        }
        return false;
    }

    Log(dayExists());

    if (dayExists()) {
        const monthsMap = eventsModel.get(year);
        const daysMap = monthsMap.get(month);
        const dayEvents = daysMap.get(day);
        return dayEvents.length;
    }
    return "";
}

localData.getDayEvents = function() {
    const currentDate = localData.currentDate;
    const foo = eventsModel;
    return eventsModel.get(currentDate.getFullYear()).get(currentDate.getMonth() + 1).get(currentDate.getDate());
}


localData.initializeModel = function() {
    axios.get(`http://${serverAddress}:3001/events/model-information`, {})
        .then(res => {
            Log("Got a response")
            Log("res:" + res.data.sendModel)
            let map = new Map(JSON.parse(res.data.sendModel));
            
            eventsModel = localData.arrayToMap(map);
            console.log(eventsModel);
        })
        .catch(error => {
            console.error("initializeModel Error:", error);
    });
}



export default localData;