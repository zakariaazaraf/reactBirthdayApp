import React from "react"

import './App.css';
import data from "./data"
import { useState } from 'react';


function App() {
  const [birthdays, setBirthdays] = useState(data)
  const clear = () =>{
    setBirthdays([])
  }
  return (
    <div className="container">
      <h2>{birthdays.length} Birthdays Today</h2>
      {birthdays.map(person =>{
        const {image, id, name, age} = person
        return (
          <div key={id} className="info">
            <img src={image} alt={name}></img>
            <div>
              <p className="name">{name}</p>
              <p>{age} Years</p>
            </div>
            
          </div>
        )       
      })}
      <button onClick={clear}>Clear All</button>
    </div>
  );
}

export default App;
