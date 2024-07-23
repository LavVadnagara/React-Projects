import React, { useState } from 'react';
import './App.css'
import { JokeData } from './Jokedata.js';

function App() {
     const [JokeTypevalue, SetInputedJokeType] = useState('');
     const JokeType = JokeData.filter(Jtype => Jtype.type === JokeTypevalue);

     const ViewJoke = JokeType.map((Jtype, index) => 
          <div className='jokeList' key = {index}>
               {/* <li>Id number: {Jtype.id}</li> */}
               {/* <li>Joke type: {Jtype.type}</li> */}
               <li>The Joke:&nbsp;&nbsp;&nbsp;{Jtype.joke}</li>
          </div>
     )
     return (
          <div className='container'>
               <h1>The Jokes</h1>
               <label>Enter the type of Joke mentioned below <br/>
               "general", "programming", "food" and "animals" 
               </label><br/><br/>
               <input className='jokeinput' type="text" placeholder="Enter here" value={JokeTypevalue} 
               onChange={(e) => SetInputedJokeType(e.target.value)} />
               <ul>{ViewJoke}</ul>
          </div>
     )
}

export default App
