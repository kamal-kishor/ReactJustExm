import React, { useState } from 'react'

export default function Temperatrure() {
  const [city, setCity] = useState('Delhi')
  const [weather, setWeather] = useState({})

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7c1030c356msh7465285332ea78ep1c4012jsn3616ba35af5a',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  }

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const getWeather = (e) => {
    e.preventDefault()
    fetch(
      'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data)
      })
  }
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-lg-9">
            <div className="shadow p-3 mb-5 bg-body rounded my-3">
              {Object.keys(weather).length !== 0 ? (
                <div>
                  <h2>{city}</h2>
                  <div className="row">
                    <div className="col-lg-2">
                      <p>
                        <strong>Sunrise :</strong> {weather.sunrise}
                      </p>
                      <p>
                        <strong>Humidity :</strong> {weather.humidity}
                      </p>
                    </div>
                    <div className="col-lg-3">
                      <p>
                        <strong>Feels Like :</strong> {weather.feels_like} &#8451;
                      </p>
                      <p>
                        <strong>Cloud Density :</strong> {weather.cloud_pct}
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <p>
                        <strong>Sunset :</strong> {weather.sunset}
                      </p>
                      <p>
                        <strong>Temp : Max: </strong>
                        {weather.max_temp}&#8451; , <strong>Min: </strong>
                        {weather.min_temp}&#8451;
                      </p>
                    </div>
                    <div className="col-lg-3">
                      <p>
                        <strong>Wind Directions :</strong> {weather.wind_degrees}
                      </p>
                      <p>
                        <strong>Wind Speed :</strong> {weather.wind_speed}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p>
                  <strong>Loading...</strong>
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-3 pt-1">
            <h5>
              <center> Get Weather Upadate</center>
            </h5>
            <form className="d-flex" onSubmit={getWeather}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter City"
                onChange={handleChange}
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
