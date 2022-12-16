const request = require('request')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Bulan,ph&APPID=4ec5c0904e05f548051f556cad0e94b8'

request({ url:  url, json: true }, (error, response) => {
    //console.log(response.body)
    console.log(response.body.weather[0].description + '. It is currently ' + response.body.main.temp + ' degrees fahrenheit out. There is a ' + response.body.clouds.all + '% chance of rain.')
})

// Goal: Print a small forecast to the user

// 1. Print: "It is currently 58.55 degrees out. There is a chance of rain." 
// 2. Test your work!
