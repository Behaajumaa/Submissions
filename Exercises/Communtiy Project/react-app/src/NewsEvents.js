import React from "react";
import "./App.css";
import "./NewsEvents.css";




export default function App(props) {
  console.log(props);
  return (

    
    <div>
       
       <header>
            <nav classname="navbar">  
              <a href ="NewsEvents.js"classname="navItem">Home       </a>  
              <a href="/News&events/news.html" classname="navItem">News &amp; Events</a>  
              <a href="/Contact uc/index.html" classname="navItem">Contact Us </a>  
            </nav>
          </header>
          <section className="section1 SizeOfSecations">
          <div className="part1 divInsideSections SizeOfSecations">
            <img  src={require("./img/pic2.jpg")} />     
          </div>
          <div className="part2 divInsideSections SizeOfSecations"><h3>welcome1 back Lorem ipsum dolor sit amet consectetur adipisicing elit. Explib fuga sint distinctio molestiae odio libero.</h3></div>
          <div className="part3 divInsideSections SizeOfSecations">
          <img  src={require("./img/pic4.jpg")} />     
          </div>
          <div className="part4 divInsideSections SizeOfSecations"><h3>welcom2 back Lorem ipsum dolor sit, umquam, mollitia omnis. Fugiat sit aliquam vitae numquam, mollitia excepturi ullam eos quos recusandae.</h3></div>
        </section>
        <section className=" section2 SizeOfSecations">
          <div className="part5 divInsideSections SizeOfSecations"><h3>welcome3 backlore Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dout veritatis ea, deserunt facere nobis, architecto illum rem quo explicabo aperiam.</h3></div>
          <div className="part6 divInsideSections SizeOfSecations">
          <img  src={require("./img/pic1.jpg")} />     
          </div>
          <div className="part7 divInsideSections SizeOfSecations"><h3>welcome4 back Lorem ipsum dolor sit amet consectetur adip sit dolorem. Nulla nisi a accusamus voluptate?</h3></div>
          <div className="part8 divInsideSections SizeOfSecations">
          <img  src={require("./img/pic3.jpg")} />     
          </div>
        </section>


        </div>



      

  );
}