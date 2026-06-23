import React, { useEffect, useState } from 'react'
import FeactureCard from './FeatureCard'
import { weatherApi } from "../services/WeatherAPI";

const WeatherHero = () => {

     const [time, setTime] = useState(new Date())
    
        useEffect(() => {
            const interval = setInterval(() => {
                setTime(new Date())
            }, 1000)
    
            return () => {
                clearInterval(interval)
            }
        }, [])
    

    let image = null;
    if (time.getHours() < 7) {
        image = "https://images.unsplash.com/flagged/photo-1553475873-55d8c03e9f5f?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    else if (time.getHours() < 12) {
        image = "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1470&auto=format&fit=crop";
    }
    else if (time.getHours() < 15) {
        image = "https://images.unsplash.com/photo-1514519334989-3d5c8b1a9f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    else if (time.getHours() < 20) {
        image = "https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    } else {
        image = "https://images.unsplash.com/flagged/photo-1553475873-55d8c03e9f5f?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    }
    const [weatherData, setWeatherData] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const data = await weatherApi();
            setWeatherData(data)
        }

        getData();
    }, []);

    return (
        <div className="w-full h-130 relative ">
            {/* Background Image */}
            <img
                className="absolute inset-0 w-full h-full object-cover"
                src={image}
                alt=""
            />

            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="p-4 relative z-10 flex justify-between text-white h-full">
                <div className="left flex flex-col justify-between ">
                    <div className='flex flex-col gap-4 '>
                        <h5 className="text-2xl">WEATHER</h5>
                        <h1 className="text-5xl font-semibold flex gap-4"> <img className='h-full object-cover' src={weatherData?.current?.condition?.icon} alt="" />{weatherData?.current?.temp_c}° • {weatherData?.location?.name}</h1>
                        <h3>{weatherData?.current?.condition?.text} • Feels like {weatherData?.current?.feelslike_c}°</h3>
                    </div>
                    <div className='flex flex-col items-start '>
                        <h5>Today  <span className='px-1.5 bg-green-400 rounded-full'>LIVE</span></h5>
                        <h3 className='text-2xl'>Wind {weatherData?.current?.wind_kph} km/h</h3>
                        <h6>Humidity: {weatherData?.current?.humidity}%</h6>
                        <p className='text-xs mt-3 opacity-60'>Last Update: {weatherData?.current?.last_updated}</p>
                    </div>

                </div>

                <div className="right flex flex-col items-center justify-end ">
                    <h1 className='text-7xl'>{time.toLocaleTimeString()}</h1>
                    <h5>{time.toLocaleDateString('en-US', {
                        weekday: 'long'
                    })}, {time.toLocaleDateString('en-US', {
                        month: 'long'
                    })}</h5>
                </div>
            </div>
        </div>
    )
}

export default WeatherHero