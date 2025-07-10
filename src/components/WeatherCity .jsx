import React, { useEffect, useState } from 'react'
import { obtenerTemperatura } from '../utils/api'
import Text from './Text'
import "../wheathercity.css"

function WeatherCity () {
    
    const [cityFind, setCityFind] = useState("")
    const [weather, setWeather] = useState([])
    const [message, setMessage] = useState("")
    const [temperatura, setTemp] = useState("")
    const [msgError, setError] = useState("")

    const personalizaError = (errorCode) => {
    const errorMessages = {
      404: "Ciudad no encontrada. Por favor, verifica el nombre.",
      default: "Ocurrió un error inesperado. Intenta nuevamente."
    };

    return errorMessages[errorCode] || errorMessages.default;
  };


    const handleChange = e => {
       // if (e.target.value)
            setCityFind(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (cityFind == "")
            return;

        obtenerTemperatura(cityFind)
        .then( clima => setWeather(clima)  ) // seteo la variable que chequeo con useEffect
        //.catch( err => setError(`El error es ${err}`))
        .catch( err => {
                        const errorCode = err.response?.status || err.code || "default";
                        const errorMessage = personalizaError(errorCode);
                        setError(errorMessage);
                        console.error("Error:", err);
                }) 
        .finally( setCityFind("") )
       
    }

    useEffect(() => {
        
        if (weather.length == 0)
            return;

        setTemp(weather.main.temp)
        setMessage((temperatura > 30) ? `Hace Mucho Calor` : `Hace mucho frío`)

    }, [weather])

    return (
        <>
        <form name='frmWeather' id='frmWeather' className="weather-form" onSubmit={handleSubmit} >
            <input
            className="weather-input"
            type="text"
            id="cityFind"
            name="cityFind"
            value={cityFind}
            onChange={handleChange}
            placeholder="Ingresa una ciudad" />

            <button  className="weather-button" type="submit" >Consultar Clima </button>
        </form>
        <div>
        {
            
            (temperatura != "") ? <><Text as="p" >{`La Temperatura es de: ${temperatura} °C `}</Text><Text as="p" >{message}</Text></> : undefined
            

        }
        </div>
      {
        (msgError != "") && (
            <div className="weather-error">
                <Text as="p">{msgError}</Text>
            </div>
        )
      }
        </>
  )

}

export default WeatherCity 