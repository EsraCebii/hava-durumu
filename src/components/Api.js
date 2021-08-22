import React,{useContext,useState,useEffect} from 'react';
import CityContext from '../contexts/CityContext';
import axios from 'axios';


const Api =() => {
    const {city} = useContext(CityContext);
    const [weather, setWeather]= useState();
    const latitude = city.lat;
    const longitude =city.long;

    const getWeatherData = async(lat, lon) => {
        const key ="5fb615c6a43f168b947830a9f4eb98cf";
        try {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}&lang=tr&units=metric`);
        setWeather(data);
        } catch{
            alert("Veri alınamadı.")
        }
    };

    useEffect(() => {
        getWeatherData(latitude, longitude)

    }, [latitude, longitude])


    console.log(weather)
    if(!weather){
        return <p>Yükleniyor...</p>
    }
       return (
        <>
        <h1>{city.name}</h1>
        <h2>Hava Durumu</h2>
        <div>{weather.daily.map((data,index)=>
            <div key={index}>
                <span>
                    {data.weather.map((data,index)=>
                    <div key={index}>{data.description}</div>)} 
                </span>
                <span>
                 {data.temp.max} °C
                </span>
                <span>
                 {data.temp.min} °C
                </span>
                <span>
                 {new Date(data.dt* 1000).toLocaleDateString()}
                </span>
                
            </div>)}
        </div>

        </>
    )
}
export default Api;