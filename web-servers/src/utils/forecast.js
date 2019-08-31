const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/304a951670577520e02dd3bffe647271/' + latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback ('unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback ('unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].icon + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast