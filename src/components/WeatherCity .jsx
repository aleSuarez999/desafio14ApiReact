import React, { useEffect, useState } from 'react'
import { getClima } from '../utils/api'
import Text from './Text'

function WeatherCity () {
    
    const [cityFind, setCityFind] = useState("")
    const [weather, setWeather] = useState([])
    const [message, setMessage] = useState("")
    const [temp, setTemp] = useState("")
    const handleChange = e => {
       // if (e.target.value)
            setCityFind(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (cityFind == "")
            return;

        getClima(cityFind)
        .then( clima => setWeather(clima)  ) // seteo la variable que chequeo con useEffect
        .catch( err => console.error(err))
        .finally( setCityFind("") )
       
    }

    useEffect(() => {
        console.log(weather.length )
        if (weather.length < 2)
            return;

        console.log("hay temperatura")
        setTemp(weather.main.temp)
        setMessage((temp > 30) ? `Hace Mucho Calor` : `Hace mucho frío`)

    }, [weather])

    return (
        <>
        <form name='frmWeather' id='frmWeather' onSubmit={handleSubmit} >
            <input
            type="text"
            id="cityFind"
            name="cityFind"
            value={cityFind}
            onChange={handleChange}
            placeholder="Ingresa una ciudad" />

            <button type="submit" >Consultar Clima </button>
        </form>
        {
            (temp) ? <Text as="p" >{`${temp} C ${message}`}</Text> : undefined
            
        }
        </>
  )

}

export default WeatherCity 