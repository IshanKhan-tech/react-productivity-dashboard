import axios from "axios"
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export const weatherApi = async ()=>{
    const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Bhopal`)
    return res.data;
}

