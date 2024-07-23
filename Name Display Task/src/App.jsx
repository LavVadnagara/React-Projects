import { useState } from 'react'
import './App.css'

function App() {
     const [nameValue, setNameValue] = useState('');
     const [nameValueList, setNameValueList] = useState([]);

     const handleAddName = () => {
          setNameValueList([...nameValueList, nameValue]);
          setNameValue('');
     };

     return (
          <div className='container'>
               <input className='nameInput' type="text" placeholder="Enter name here"
                    value={nameValue} onChange={(e) => setNameValue(e.target.value)} />

               <button onClick={handleAddName}>Add Name</button>
               
               <ul>
                    {nameValueList.map((nameValue, index) => (
                         <li className='nameListDisplay' key={index}> {nameValue} </li>))}
               </ul>
               
               <h1>Total number of names entered: {nameValueList.length}</h1>
          </div>
     )
}

export default App
