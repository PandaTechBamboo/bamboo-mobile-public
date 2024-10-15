import React from 'react'


function convertNumberToMonth(monthNumber) {
    const mathNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return mathNames[monthNumber]

}

export default convertNumberToMonth;