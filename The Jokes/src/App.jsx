// import React, { useState } from 'react';
// import './App.css'
// import { JokeData } from './Jokedata.js';

// function App() {
//      const [JokeTypevalue, SetInputedJokeType] = useState('');
//      const JokeType = JokeData.filter(Jtype => Jtype.type === JokeTypevalue);

//      const ViewJoke = JokeType.map((Jtype, index) => 
//           <div className='jokeList' key = {index}>
//                {/* <li>Id number: {Jtype.id}</li> */}
//                {/* <li>Joke type: {Jtype.type}</li> */}
//                <li>The Joke:&nbsp;&nbsp;&nbsp;{Jtype.joke}</li>
//           </div>
//      )
//      return (
//           <div className='container'>
//                <h1>The Jokes</h1>
//                <label>Enter the type of Joke mentioned below <br/>
//                "general", "programming", "food" and "animals" 
//                </label><br/><br/>
//                <input className='jokeinput' type="text" placeholder="Enter here" value={JokeTypevalue} 
//                onChange={(e) => SetInputedJokeType(e.target.value)} />
//                <ul>{ViewJoke}</ul>
//           </div>
//      )
// }

// export default App

import React, { useState } from 'react';
import './App.css';
import { JokeData } from './Jokedata.js';

function App() {
     const [inputValue, setInputValue] = useState('');
     const [filteredJokes, setFilteredJokes] = useState([]);

     const handleSubmit = () => { setFilteredJokes(JokeData.filter(joke => joke.type === inputValue.toLowerCase())); };

     return (
          <div className='container'>
               <h1>The Jokes</h1>
               <span>Select the Joke type !!</span><br/><br />
               <select className='jokeinput' value={inputValue} onChange={(e) => { setInputValue(e.target.value); }}>
                    <option value="" disabled selected>Select Joke</option>
                    <option value="general">general</option>
                    <option value="programming">programming</option>
                    <option value="food">food</option>
                    <option value="animals">animals</option>
                    <option value="none">clear all</option>
               </select>
               <button className='subbtn' onClick={handleSubmit}>Submit</button>
               <ul>
                    {filteredJokes.map((joke, index) => (
                         <div className='jokeList' key={index}>
                              <li>The Joke:&nbsp;&nbsp;&nbsp;{joke.joke}</li>
                         </div>
                    ))}
               </ul>
          </div>
     );
}

export default App;
