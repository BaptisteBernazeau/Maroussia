import React, { useState } from 'react';
import './App.css';
import useForceUpdate from 'use-force-update';


const App = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * (14 - 0 + 1)))
  const forceUpdate = useForceUpdate();

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
  
    function importAll(r) {
      return r.keys().map(r);
    }
    
    const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    let recycle = importAll(require.context('./../public/cycle'))

    recycle =  recycle.filter(el => {
      const wantedName = el.slice(14)
      const colorIndex = parseInt(wantedName.substring(0, wantedName.indexOf('.')))
      return colorIndex === index;
    })

    let color = images.map((i, t) =>{
      const wantedName = i.slice(14)
      const colorIndex = parseInt(wantedName.substring(0, wantedName.indexOf('_')))
      if(colorIndex === index) return i
      else return null
    })
    

     color = color.filter(function (el) {
      return el != null;
    });
    let images1 = color.slice(0, 5);
    let images2 = color.slice(6, 12);
    let images3 = color.slice(13, 25);
  
    shuffle(images1);
    shuffle(images2);
    shuffle(images3);
  
    let library1 = images1.map((i, t) => {
      let name = "pool1"
      if(t % 2 === 0) 
        name= "pool2"
      if(t % 3 === 0)
        name = "pool3"

      return ( <img key={t}  className={name}  alt="" src={i} ></img>)
    })
  
    let library2 = images2.map((i, t) => {
      let name = "pool1"

      if(t % 2 === 0) 
        name= "pool2"
      if(t % 3 === 0) 
        name = "pool3"
      return ( <img key={t}  className={name} alt=""  src={i} ></img>)
    })
  
    let library3 = images3.map((i, t) => {
      let name = "pool1"

      if(t % 2 === 0) 
        name= "pool2"
      if(t % 3 === 0) 
        name = "pool3"
      return ( <img key={t}  className={name} alt=""  src={i} ></img>)
    })
    return (
      <div className="App" style={{position: "absolute", backgroundColor: "white", }}>
        <div style={{position: "fixed", zIndex:"50", fontSize: "350px", top: "150px", left: "23px"}}>
          <img src={recycle}  width="70px;" onClick={()  => {
            forceUpdate();
            setIndex(Math.floor(Math.random() * (13 - 0 + 1)));
          }} 
          className="stik" alt=""></img>
        </div>
          <div style={{marginLeft:"0%", zoom: "7"}}>
            {library1}
            {library2}
            {library3}
          </div>  
      </div>
    );
  }
 

export default App;
