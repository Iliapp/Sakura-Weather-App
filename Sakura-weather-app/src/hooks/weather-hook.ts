import {useState} from "react";



type WeatherType = {
    loading: boolean;
    error: boolean;
    success: boolean;
    temperature: number | null;
    type: "sun" | "rain" | "snow" | "night" | "temperature";
    city: string;
};




export function WeatherHook() {
    const[weather, setWeather] = useState<WeatherType>({
        loading: false,
        error: false,
        success: false,
        temperature: null,
        type: "temperature",
        city: "city",
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
                city: "Tokyo",
            });
        },2000);

    }

    function printer() {
        console.log(weather);
    }



    return {
        weather,
        updateWeather,
        printer,
    };
}

