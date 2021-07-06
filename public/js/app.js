const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const textLocation = document.querySelector('#location')
const textForecast = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const location = search.value

  textLocation.textContent = 'Loading...'
  textForecast.textContent = ''

  fetch('/weather?address='+ location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        textLocation.textContent = data.error
        textForecast.textContent = ''
      } else {
        textLocation.textContent = data.location
        textForecast.textContent = data.forecast
      }
    })
  })
})