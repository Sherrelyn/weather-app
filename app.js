const request = require('request')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Bulan,ph&APPID=4ec5c0904e05f548051f556cad0e94b8'

request({ url:  url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})