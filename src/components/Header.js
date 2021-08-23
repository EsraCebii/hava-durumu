import React,{useContext} from 'react';
import CityContext from '../contexts/CityContext';
import './Header.css';


const Header =() => {
    const {city,setCity,cities} = useContext(CityContext);

    const hangi = ()=> {
        const x =document.getElementById("mySelect").value;
        for(let i=0; i< cities.length;i++){
            if(x===cities[i].name){
                setCity(cities[i]);
            }
        }
        
    }

    console.log(city.name)
    return (
        <div className="drop">
        <select onChange={()=> hangi()} id="mySelect">
            {cities.map(city => (
                <option value={city.name} key={city.name}>{city.name}</option> 
            ))}
        </select>
        </div>
    )
}
export default Header;