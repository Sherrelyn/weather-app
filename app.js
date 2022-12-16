const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//const url = 'http://api.openweathermap.org/data/2.5/weather?q=Bulan,ph&APPID=4ec5c0904e05f548051f556cad0e94b8'

//request({ url:  url, json: true }, (error, response) => {
  //  if (error) {
    //    console.log('Unable to connect to weather service!')
   // } else if (response.body.error) {
     //   console.log('Unable to find location')
    //} else {
      //  console.log(response.body.weather[0].description + '. It is currently ' + response.body.main.temp + ' degrees fahrenheit out. There is a ' + response.body.clouds.all + '% chance of rain.')
    //}
//})  
    
    //console.log(response.body)

//const geocodeURL = 'https://geocode.maps.co/search?q=Bulan+Sorsogon+Philippines'

//request({ url:geocodeURL, json: true }, (error, response) => {
 //   if (error) {
 //       console.log('Unable to connect to location services!')

//    } else if (response.body[0].length === 000) {
//        console.log('Unable to find location. Try another search.')
//    } else {
//        const latitude = response.body[0].lat
//    const longitude = response.body[0].lon
//    console.log(latitude, longitude)

//    }
   
//})


//geocode('Thailand', (error, data) => {
//    console.log('Error!', error)
//    console.log('Data', data)
//})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})