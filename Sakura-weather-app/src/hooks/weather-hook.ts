import {useState} from "react";
// import ReactWeather, { useOpenWeather } from 'react-open-weather';


type WeatherType = {
    loading: boolean;
    error: boolean;
    success: boolean;
    temperature: number | null;
    type: "sun" | "rain" | "snow" | "night" | "temperature";
    city: string;
};




export function WeatherHook() {
    const [cityInput, setCityInput] = useState<string>("");
    const[weather, setWeather] = useState<WeatherType>({
        loading: false,
        error: false,
        success: false,
        temperature: null,
        type: "temperature",
        city: "",
    });









    function updateWeather() {
        setWeather({...weather, loading: true})
        setTimeout(() => {
            const types = ["sun", "rain", "snow", "night"];
            const temp = Math.floor(Math.random() * 35);
            const type = types[Math.floor(Math.random() * types.length)] as WeatherType["type"];


            setWeather({
                loading: false,
                error: false,
                success: true,
                temperature: temp,
                type: type,
                city: cityInput,
            });
        },2000);

    }

    function printer() {
        console.log(weather);
    }



    return {
        weather,
        cityInput,
        setCityInput,
        updateWeather,
        printer,
    };
}

