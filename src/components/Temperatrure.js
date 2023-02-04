import React, { useEffect, useState } from 'react'

export default function Temperatrure() {
  const [weatherData, setWeatherData] = useState('')
  const [city, setCity] = useState('Delhi')

  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((data) => {
        setWeather(data)
      })
  }, [city])
  return (
    <div>
      <h2>Weather in {city}: </h2>
      <p>Temperature: </p>
    </div>
  )
}
