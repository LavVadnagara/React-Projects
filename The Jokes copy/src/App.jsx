import React, { useState, useCallback } from 'react';
import './App.css';
import { JokeData } from './Jokedata.js';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [filteredJokes, setFilteredJokes] = useState([]);

    const handleSubmit = useCallback(() => {
        setFilteredJokes(JokeData.filter(joke => joke.type === inputValue.toLowerCase()));
    }, [inputValue]);

    return (
        <div className='container'>
            <h1>The Jokes</h1>
            <span>Select the Joke type !!</span><br /><br />
            <select className='jokeinput' value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
                <option value="" disabled defaultValue>Select Joke</option>
                <option value="general">general</option>
                <option value="programming">programming</option>
                <option value="food">food</option>
                <option value="animals">animals</option>
                <option value="none">Clear all</option>
            </select>
            <button className='subbtn' onClick={handleSubmit}>Submit</button>
            <div className="jokeListContainer">
                <ul>
                    {filteredJokes.map((joke, index) => (
                        <div className='jokeList' key={index}>
                            <li>The Joke:&nbsp;&nbsp;&nbsp;{joke.joke}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;


// ------------------------------------------------------------------------------------------------------------

// import React, { useState, useMemo } from 'react';
// import './App.css';
// import { JokeData } from './Jokedata.js';

// function App() {
//     const [inputValue, setInputValue] = useState('');

//     const filteredJokes = useMemo(() => {
//         return JokeData.filter(joke => joke.type === inputValue.toLowerCase());
//     }, [inputValue]);

//     return (
//         <div className='container'>
//             <h1>The Jokes</h1>
//             <span>Select the Joke type !!</span><br /><br />
//             <select className='jokeinput' value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
//                 <option value="" disabled selected>Select Joke</option>
//                 <option value="general">general</option>
//                 <option value="programming">programming</option>
//                 <option value="food">food</option>
//                 <option value="animals">animals</option>
//                 <option value="none">none</option>
//             </select>
//             <button className='subbtn'>Submit</button>
//             <ul>
//                 {filteredJokes.map((joke, index) => (
//                     <div className='jokeList' key={index}>
//                         <li>The Joke:&nbsp;&nbsp;&nbsp;{joke.joke}</li>
//                     </div>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;
