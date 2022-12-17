const { request } = require('http')
const https = require('https')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Bulan,ph&APPID=4ec5c0904e05f548051f556cad0e94b8'

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