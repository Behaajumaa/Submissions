import React, { Component } from "react";
import "./App.css";
import mostlycloudy from './img/weather-icons/mostlycloudy.svg';
import sunny from './img/weather-icons/clear.svg';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    
<div className="app">

        <div className="header">
         <input className="inputCity" type="text" placeholder="Type a city name"></input><button className="ButtonFindWeathe"> FindWeather</button>
        </div>


        <div className="main">

            <div className="imge"><img   className="image" src={mostlycloudy} alt="mostlycloudy" ></img></div>
          
            <div> <p className="pElaments ">overcast clouds</p>               </div>
            <div> <p > <strong>Temperature</strong> 10&#176;
 to 11&#8451; </p> </div>
            <div> <p ><strong>Humidity </strong>&nbsp;
 78% &nbsp;
<strong>Pressure&nbsp; &nbsp;

</strong> 1008.48</p> </div>
<div></div>

        </div>


        <div className="footer">      
        <div className="smallimg">   </div>

        <div className="smallimg"> <p>03:00</p>  <img  src={mostlycloudy} alt="smallimg" ></img> <p>8&#8451;</p>   </div>
        <div className="smallimg"> <p>06:00</p>  <img  src={mostlycloudy} alt="smallimg" ></img> <p>9&#8451;</p>   </div>
        <div className="smallimg"> <p>09:00</p>  <img  src={sunny}        alt="smallimg" ></img> <p>14&#8451;</p>   </div>
        <div className="smallimg"> <p>12:00</p>  <img  src={sunny}        alt="smallimg" ></img> <p>17&#8451;</p>   </div>
        <div className="smallimg"> <p>15:00</p>  <img  src={sunny}        alt="smallimg" ></img> <p>18&#8451;</p>   </div>
        <div className="smallimg"> <p>18:00</p>  <img  src={sunny}        alt="smallimg" ></img> <p>16&#8451;</p>   </div>
        <div className="smallimg"> <p>21:00</p>  <img  src={mostlycloudy} alt="smallimg" ></img> <p>13&#8451;</p>   </div>

        <div className="smallimg">   </div>

        
        
        
        </div>
 



</div> 


    );
  }
}

export default App;
