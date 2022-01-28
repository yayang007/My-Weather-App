const request = require('request')

const forecast = (latitude, longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=aceb76bf85140834b125eb854847eb33&query=' + latitude + ' , ' + longitude + '&units=f' 
    
    request({ url, json: true }, (error, { body }) => {
         if (error) {
                callback('Unable to connect to weather service', undefined)
         }  else if (body.error){
              callback('Unable to find location, Try another search', undefined)
         } else {
              callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.feelslike + ' degrees chance of rain');              
         }
    })
}

module.exports = forecast
