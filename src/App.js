import React from "react"

import './App.css';
import data from "./data"
import { useState } from 'react';

console.log(data.length)

function App() {
  const [birthdays, setBirthdays] = useState(data)
  const clear = () =>{
    setBirthdays([])
  }
  return (
    <div className="container">
      <h3>{birthdays.length} Birthdays Today</h3>
      {birthdays.map(date =>{
        const {image, id, name, age} = date
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
