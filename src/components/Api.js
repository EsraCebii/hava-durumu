import React,{useContext,useState,useEffect} from 'react';
import CityContext from '../contexts/CityContext';
import axios from 'axios';
import './Api';
import {CardGroup,Card} from "react-bootstrap";

const Api =() => {
    const {city} = useContext(CityContext);
    const [weather, setWeather]= useState();
    const latitude = city.lat;
    const longitude =city.long;

    const getWeatherData = async(lat, lon) => {
        const key ="5fb615c6a43f168b947830a9f4eb98cf";
        try {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}&units=metric`);
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



    const gunler = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    
    var tarih = new Date();
      console.log(tarih.toDateString())

       return (
        <div style={{backgroundImage: city.background}}>
        <CardGroup className="mx-5 mt-3" > 
            {weather.daily.map((data,index)=> 
                    //  border={ ? 'danger': 'light'}
            <Card key={index} border="light" border={new Date(data.dt*1000).toDateString()===tarih.toDateString() ? "danger" : "secondary"} >

                <div>{new Date(data.dt*1000).toDateString()}</div>
              
                <Card.Title className="text-muted justify-content-center d-flex  ">
                 {
                 gunler[new Date(data.dt* 1000).getDay()]}
                </Card.Title>
                
                
                
                {data.weather.map((data,index)=>
                <Card.Img key={index} src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} />)}

                <small className="text-muted justify-content-center d-flex">
                 {parseInt(data.temp.max)}° {parseInt(data.temp.min)}°
                </small>   

            </Card>)}
        </CardGroup>
        </div>
    )
}
export default Api;