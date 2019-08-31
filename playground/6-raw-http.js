const https = require('https')

const url = 'https://api.darksky.net/forecast/304a951670577520e02dd3bffe647271/47,-65'

const request = https.request(url, (Response) => {
    let data = ''

    Response.on('data', (chunk) => {
        data = data + chunk.toString()
    }) 

    Response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
}) 

    request.on('error', (error) => {
        console.log('An error', error)
})
request.end()