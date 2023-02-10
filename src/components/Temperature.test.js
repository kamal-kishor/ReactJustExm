import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import fetch from 'node-fetch'
// import Temperature from './Temperature'

describe('Weather API Test', () => {
  afterEach(() => {
    cleanup()
  })

  test('Test expected data type', async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7c1030c356msh7465285332ea78ep1c4012jsn3616ba35af5a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    }

    const response = await fetch(
      'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London',
      options
    )
    const data = await response.json()

    const expectedResponse = {
      data: [
        { key: 'sunrise', value: 'number' },
        { key: 'humidity', value: 'number' },
        { key: 'feels_like', value: 'number' },
        { key: 'cloud_pct', value: 'number' },
        { key: 'sunset', value: 'number' },
        { key: 'max_temp', value: 'number' },
        { key: 'min_temp', value: 'number' },
        { key: 'wind_degrees', value: 'number' },
        { key: 'wind_speed', value: 'number' }
      ]
    }

    expectedResponse.data.forEach(({ key, value }) => {
      expect(typeof data[key]).toBe(value)
    })
  })
})
