import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo]=useState({
        city: "Mumbai",
        temp:24.5,
        tempMin:23.2,
        tempMax:32.3,

        humidity:23,
        feelsLike:32,
        weather:"Haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };
    let styles= {textAlign:'center',color:'#green'};
    return (
        <div style={styles} className="weather-app">
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );    
}