import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5"
    
    //url completo ejemplo
    //http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fbeaa17e7473846bee9bc88bc161730e"

    // url completo ejercicio
    
    //https://api.openweathermap.org/data/2.5/weather?q=ohio&appid=fbeaa17e7473846bee9bc88bc161730e
    /*
    {"coord":{"lon":-83.0002,"lat":40.2503},
    "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
    "base":"stations",
    "main":{
        "temp":304.74,
        "feels_like":306.56,
        "temp_min":303.67,
        "temp_max":305.34,
        "pressure":1016,
        "humidity":49,
        "sea_level":1016,
        "grnd_level":984},
        "visibility":10000,
        "wind":{"speed":4.12, "deg":230},
        "clouds":{"all":0},
        "dt":1751756194,
        "sys":{"type":2,
                "id":2084058,
                "country":"US",
                "sunrise":1751710093,
                "sunset":1751763881
                },
        "timezone":-14400,
                "id":5165418,
                "name":"Ohio",
                "cod":200
        }
    */
})

export const getClima = async () => {
    const resp = axiosInstance.get("q=lanus&units=metric&appid=fbeaa17e7473846bee9bc88bc161730e")
    return resp.data
}