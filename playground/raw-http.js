const { request } = require('http')
const https = require('https')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Bulan,ph&APPID='

http:request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
        
    })
})
request.on('error', (error) => {
    console.log('An error', error)
})

request.end()