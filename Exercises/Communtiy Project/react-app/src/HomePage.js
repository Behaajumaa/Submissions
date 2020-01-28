import React from "react";
import "./App.css";


export default function App(props) {
  console.log(props);
  return (

    <div>
        <header>
          <nav className="navbar">  
            <a href="/HomePage.js" className="navItem">Home         </a>  
            <a href="./NewsEvents.js" className="navItem">News &amp; Events</a>  
            <a href="/Contact uc/index.html" className="navItem">Contact Us   </a>  
          </nav>
        </header>
        <div className="mainContainer">
          <section className="med">
          </section>
          <div className="sideScroll">
            <h2 className="titleOfScroll"> Who we are</h2>
            <div className="paragraph">
              <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti officiis, aut error eligendi velit amet repudiandae natus culpa accusamus soluta rerum pariatur itaque magnam a quisquam veritatis cupiditate nulla? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque libero, eligendi modi impedit maiores dolorem maxime pariatur, non quaerat aspernatur veniam ipsum nesciunt earum !cupiditate nulla? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque libero, eligendi modi arum !amet consectetun qr, non quaerat ing elit.itaque magnam a quisquam veritatis cupiditate nulla? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque libero, eligendi modi impedit maiores dolorem maxime pariatur, non quaerat aspernatur veniam ipsum nesciunt earuae natus culpa accusamus soluta rerum pariatur itaque magnam a quisquam veritatis cupiditate nulla? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque libero, eligendi modi impedit maiores dolorem maxime pariatur, non quaerat aspernatur veniam ipsum nesciunt earum !cupiditate nulla? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque libero, eligendi modi arum !amet consectetun qr, non quaerat ing elit.itaque magnam a quisquam veritatis cupiditate nulla? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque libero, eligendi modi impedit maiores dolorem maxime pariatur, non quaerat aspernatur veniam ipsum nesciunt earum !cupiditate nulla? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque libero, eligendi modi arum !amet consectetun qr, non quaerat ing elit. Neque libero, eligendi modi impedit maiores dolorem maxime pariatur, non quaerat aspernatur veniam ipsum nesciunt earum !</p>
            </div>  
          </div>    {/* End OF sideScroll */}
        </div>
      </div>
      

  );
}