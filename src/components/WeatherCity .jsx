import React, { useEffect, useState } from 'react'
import { getClima } from '../utils/api'



function WeatherCity () {
    
    const handleChange = e => {
        if (e.target.value)
            setCity(e.target.value)
    }
    const [city, setCity] = useState("")
    const [cityFind, setCityFind] = useState("")
    const [weather, setWeather] = useState([])
    
    const handleSubmit = e => {
        e.preventDefault()
        if (city != "")
        {
            alert(city)
            setCityFind(city)
        }
    }

    


    return (

        <form onSubmit={handleSubmit} >
            <input
            type="text"
            id="cityIn"
            name="cityIn"
            value={city}
            onChange={handleChange}
            placeholder="Ingresa una ciudad"
            />
            <button type="submit" >Consultar Clima </button>
        </form>
  )

  useEffect(() => {
    
        const weather = getClima(city)
        {
            setWeather(weather)
        }
  }, city)
  ()

}

export default WeatherCity 