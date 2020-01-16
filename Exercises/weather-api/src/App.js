import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import snow from "./img/weather-icons/snow.svg";
import fog from "./img/weather-icons/fog.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import Search from "./search"
import CurrentWeather from "./currentWeather";
import DuringDay from "./duringDay";


 
/* import FakeWeather from "./data/FakeWeather.json";
 */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        img:undefined,
        temp:undefined,
        city: undefined,
        Humidity:undefined,
        desWeather:undefined,
        error:undefined,

        
    };
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city= e.target.elements.city.value;
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=99d7fbbf4fc09d4ea27c7d3b7de77cdb`);

    const data = await response.json();

   console.log(data);
    if (data.cod==="200"){
  
    this.setState({
      img:       data.list[0].weather[0].main, 
      temp:      data.list[0].main.temp,
      avgMin  :  data.list[0].main.temp_min,
      avgMax  :  data.list[0].main.temp_max,
      Humidity:  data.list[0].main.humidity,
      Pressure:  data.list[0].main.pressure,
      desWeather:data.list[0].weather[0].description,
      alt:data.list[0].weather[0].description,

      temp1:   Math.round( data.list[1].main.temp,) ,
      temp2:   Math.round( data.list[2].main.temp,) ,
      temp3:   Math.round( data.list[3].main.temp,) ,
      temp4:   Math.round( data.list[4].main.temp,) ,
      temp5:   Math.round( data.list[5].main.temp,) ,
      temp6:   Math.round( data.list[6].main.temp,) ,
      temp7:   Math.round( data.list[7].main.temp,) ,

      time1:(data.list[0].dt_txt).slice(11,16),
      time2:(data.list[1].dt_txt).slice(11,16),
      time3:(data.list[2].dt_txt).slice(11,16),
      time4:(data.list[3].dt_txt).slice(11,16),
      time5:(data.list[4].dt_txt).slice(11,16),
      time6:(data.list[5].dt_txt).slice(11,16),
      time7:(data.list[6].dt_txt).slice(11,16),

       

      error:""

    });  

  } //ifclose 
  else {
  alert("City not found ");
  }
}

  render() {
    return (
      <div className="app">

        <Search getWeather={this.getWeather}></Search>

        <CurrentWeather
          img={this.state.img}
          alt={this.state.desWeather}
          desWeather={this.state.desWeather}
          avgMin={this.state.avgMin}
          avgMax={this.state.avgMax}
          Humidity={this.state.Humidity}
          Pressure={this.state.Pressure}


          
        ></CurrentWeather>

        <div className="footer">
          <div className="small"></div>

          <DuringDay
            time={this.state.time1}
            smallImg={mostlycloudy}
            smallAlt="mostlycloudy"
            temp={this.state.temp1}
          ></DuringDay>

          <DuringDay
            time={this.state.time2}
            smallImg={mostlycloudy}
            smallAlt="mostlycloudy"
            temp={this.state.temp2}   
          ></DuringDay>

          <DuringDay
            time={this.state.time3}
            smallImg={clear}
            smallAlt="clear"
            temp={this.state.temp3}
          ></DuringDay>

          <DuringDay
            time={this.state.time4}
            smallImg={clear}
            smallAlt="clear"
            temp={this.state.temp4}
          ></DuringDay>

          <DuringDay
            time={this.state.time5}
            smallImg={clear}
            smallAlt="clear"
            temp={this.state.temp5}
          ></DuringDay>

          <DuringDay
            time={this.state.time6}
            smallImg={clear}
            smallAlt="clear"
            temp={this.state.temp6}
          ></DuringDay>

          <DuringDay
            time={this.state.time7}
            smallImg={mostlycloudy}
            smallAlt="clear"
            temp={this.state.temp7}
          ></DuringDay>

          <div className="small"></div>
        </div>
      </div>
    );
  }
}
export default App;