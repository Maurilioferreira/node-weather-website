const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWF1cmlsaW9ib2kiLCJhIjoiY2txcGYwaWlnMDE5MTJ2cGNtemF1azlvYSJ9.OS81pbTxQaeJKe2ZtEJbdg&limit=1'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location service!', undefined)
    } else if (!body.features) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      const [longitude, latitude] = (body.features && body.features[0] && body.features[0].center) ? body.features[0].center : [];
      const location = (body.features && body.features[0] && body.features[0].place_name) ? body.features[0].place_name : '';
      callback(undefined, {
        longitude,
        latitude,
        location
      })
    }
  })
}

module.exports = geocode








// // Geocoding

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWF1cmlsaW9ib2kiLCJhIjoiY2txcGYwaWlnMDE5MTJ2cGNtemF1azlvYSJ9.OS81pbTxQaeJKe2ZtEJbdg&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to location service!')
//   } else if (!response.body.features) {
//     console.log('Unable to find location. Try another search.')
//   } else {
//     const [longitude, latitude] = response.body.features[0].center;
//     console.log(`Longitude: ${longitude} and Latitude: ${latitude}`)
//   }
// })
