const { convertCtoF, convertFtoC } = require('./utils')

const todaysHigh = 84

console.log('High today: ' + todaysHigh + '°F ' + ' OR ' + convertFtoC(todaysHigh) + '°C')

const lowTemp =23

console.log('Low Today: ', convertCtoF(lowTemp) + '°F', lowTemp + '°C')