const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=a49176a1a31c1f79fea3aabc10461bcb&query=' + longitude + ',' + latitude + '&units=f';

  request({ url, json: true }, (error, { body }) => {
    // const { error, current, location } = body
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      const current = body.current;
      const location = body.location.region || '';
      callback(undefined, `${location} | ${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degress out.`)
    }
  })
}

module.exports = forecast;












// const url = 'http://api.weatherstack.com/current?access_key=a49176a1a31c1f79fea3aabc10461bcb&query=37.8267,-122.4233&units=f';//

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service! error: \r\n', error)
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     const current = response.body.current;
//     console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degress out.`)
//   }
// })

