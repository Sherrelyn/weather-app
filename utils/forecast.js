const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Bulan,ph&APPID='

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.weather[0].description + '. It is currently ' + response.body.main.temp + ' degrees fahrenheit out. There is a ' + response.body.clouds.all + '% chance of rain.')
        }
    })
}

module.exports = forecast