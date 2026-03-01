import {useState} from "react";




export function WeatherHook() {
    const[weather, setWeather] = useState({
        loading: false,
        error: false,
        success: false,
        temperature: null,
        type: "temperature",
        city: "city",
    });

    function printer() {
        console.log(weather);
    }

    function updateWeather() {
        setWeather({
            loading: true,
            error: false,
            success: true,
            temperature: null,
            type: "temperature",
            city: "city",
        })

    }












    return {
        weather,
        updateWeather,
        printer
    };
}

