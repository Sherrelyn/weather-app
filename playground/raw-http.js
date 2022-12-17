const { request } = require('http')
const https = require('https')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Bulan,ph&APPID=4e*c5*c09*04e*05f*548*051f*556*ca*d0*e9*4b8*'

//just remove the asterisks po. nagkanotif kase from github

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