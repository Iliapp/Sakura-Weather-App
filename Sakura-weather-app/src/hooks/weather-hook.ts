import {useState} from "react";
// import ReactWeather, { useOpenWeather } from 'react-open-weather';
import axios from "axios";


type WeatherType = {
    loading: boolean;
    error: boolean;
    success: boolean;
    temperature: number | null;
    type: "sun" | "rain" | "snow" | "night" | "temperature";
    city: string;
    feels_like: number | null;
    humidity: number | null;
    wind_speed: number | null;
};




export function WeatherHook() {
    const [cityInput, setCityInput] = useState<string>("");
    const [weather, setWeather] = useState<WeatherType>({
        loading: false,
        error: false,
        success: false,
        temperature: null,
        type: "temperature",
        city: "",
        feels_like: null,
        humidity: null,
        wind_speed: null
    });


    async function updateWeather() {

        if (cityInput === "") return;

        setWeather(prev => ({...prev, loading: true}));

        try {
            const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`
            );

            const data = res.data;
            const feels = data.main.feels_like;
            const humidity = data.main.humidity;
            const wind = data.wind.speed;
            const temp = data.main.temp;
            const weatherMain = data.weather[0].main.toLowerCase();

            let type: WeatherType["type"] = "sun";
            if (weatherMain.includes("rain")) type = "rain";
            else if (weatherMain.includes("snow")) type = "snow";
            else if (weatherMain.includes("clear")) type = "sun";
            else type = "night";



            setWeather({
                loading: false,
                error: false,
                success: true,
                temperature: Math.round(temp),
                type: type,
                city: data.name,
                feels_like: Math.round(feels),
                humidity: humidity,
                wind_speed: wind.speed
            });

        } catch (err) {
            console.error(err);

            setWeather(prev => ({
                ...prev,
                loading: false,
                error: true
            }));

        }
    }

    return {
        weather,
        cityInput,
        setCityInput,
        updateWeather,
    };
}