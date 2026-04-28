import { WeatherHook } from "./hooks/weather-hook";
import RainAnimation from "./animation/RainAnimation.tsx";
import NightAnimation from "./animation/NightAnimation.tsx";
import SunAnimation from "./animation/SunAnimation.tsx";
import SnowAnimation from "./animation/SnowAnimation.tsx";
import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion";
import type { WeatherType } from "./hooks/weather-hook";

function App() {


    const WeatherCard = ({ weather }: { weather: WeatherType }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30">



                <h1 className="text-2xl font-bold">{weather.city}</h1>
                <h2 className="text-2xl font-semibold mb-3">Temperature: {weather.temperature}°C</h2>












            </motion.div>
            );

    };










    const { weather, cityInput, setCityInput, updateWeather } = WeatherHook();

    return (
        <>
            {weather.success && (
                <>
                    {weather.type === "sun" && <SunAnimation />}
                    {weather.type === "rain" && <RainAnimation />}
                    {weather.type === "snow" && <SnowAnimation />}
                    {weather.type === "night" && <NightAnimation />}
                </>
            )}






        <div className="p-8 font-sans max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">🌤️ Sakura Weather App</h1>

            
            <div className="bg-gray-100 p-5 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold mb-3">Temperature: {weather.temperature}°C</h2>
                <p className="text-lg text-gray-700 mb-2">Weather type: {weather.type}</p>
                <p className="text-lg text-gray-700">City: {weather.city}</p>
                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}

                />

            </div>

            <button 
                onClick={updateWeather} 
                disabled={weather.loading}
                className={`px-5 py-2 text-white rounded font-semibold bg-pink-500 transition ${weather.loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:bg-pink-600"}`}
            >
                {weather.loading ? "Loading..." : "Update Weather"}
            </button>

            {weather.loading && <p className="mt-4 text-gray-600">⏳ Loading...</p>}
            {weather.success && <p className="mt-4 text-green-600 font-semibold">✅ Weather updated!</p>}
            {weather.error && <p className="mt-4 text-red-600 font-semibold">❌ Error loading weather</p>}



            {/*{weather.success && (*/}
            {/*    <MySunAnimation type={weather.type} />*/}
            {/*)}*/}

        </div>
        </>
    );
}

export default App;



