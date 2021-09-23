function convertCtoF(tempC){
 return tempC * 1.8 +32
}

function convertFtoC(tempF){
  return (tempF -32) / 1.8
}


convertCtoF(30)

convertFtoC(75)

module.exports = {convertCtoF, convertFtoC}