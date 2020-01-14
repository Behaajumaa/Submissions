import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import Search from "./search"
import CurrentWeather from "./currentWeather";
import DuringDay from "./duringDay";
import FakeWeather from "./data/FakeWeather.json";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">

      <Search ></Search>

          <CurrentWeather 
          img ={mostlycloudy} 
          alt= "mostlycloudy"
          desWeather="overcast clouds"
          avgMin="10"
          avgMax="11"
          Humidity="78"
          Pressure="1008.48"
          ></CurrentWeather>   

        <div className="footer">
          <div className="small"></div>

          <DuringDay
            time= "3:00"
            smallImg={mostlycloudy}
            smallAlt="mostlycloudy"
            temp="8"
          ></DuringDay>

           <DuringDay
            time= "3:00"
            smallImg={mostlycloudy}
            smallAlt="mostlycloudy"
            temp="8"
          ></DuringDay>
          
          <DuringDay
            time= "3:00"
            smallImg={clear}
            smallAlt="clear"
            temp="8"
          ></DuringDay>
          
          <DuringDay
            time= "3:00"
            smallImg={clear}
            smallAlt="clear"
            temp="8"
          ></DuringDay>
          
          <DuringDay
            time= "3:00"
            smallImg={clear}
            smallAlt="clear"
            temp="8"
          ></DuringDay>
          
          <DuringDay
            time= "3:00"
            smallImg={clear}
            smallAlt="clear"
            temp="8"
          ></DuringDay>
          
          <DuringDay
            time= "3:00"
            smallImg={mostlycloudy}
            smallAlt="clear"
            temp="8"
          ></DuringDay>
       
          <div className="small"></div>
        </div>
      </div>
    );
  }
}
export default App;