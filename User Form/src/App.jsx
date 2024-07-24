import React, { useState } from 'react';
import './App.css';

function App() {
     const [inputFormData, setFormData] = useState({ userName: '', userEmail: '' });
     const [userList, setUserList] = useState([]);

     const handleAddUser = (e) => {
          e.preventDefault();
          setUserList([...userList, { name: inputFormData.userName, email: inputFormData.userEmail }]);
          setFormData({ userName: '', userEmail: '' });
     };

     return (
          <div className='container bg-blue-600 '>
               <h1>User Profile Data</h1>
               <form className="inputdata" onSubmit={handleAddUser}>

                    <label>
                         Username:&nbsp;&nbsp;&nbsp;
                         <input className='nameInput' type="text" placeholder="Enter Username here"
                              value={inputFormData.userName}
                              onChange={(e) => setFormData({ ...inputFormData, userName: e.target.value })} />
                    </label> <br />

                    <label>Email:&nbsp;&nbsp;&nbsp;
                         <input className='emailInput' type="email" placeholder="Enter Email here"
                              value={inputFormData.userEmail}
                              onChange={(e) => setFormData({ ...inputFormData, userEmail: e.target.value })} />
                    </label> <br />

                    <button type="submit">Add Data</button>
               </form>

               <div className="Displaydata">
                    <h1>User Profiles</h1>
                    <ul className='nameListDisplay'>
                         {userList.map((user, index) => (
                              <li key={index}>
                                   Username: {user.name} <br /> Email: {user.email}
                              </li>
                         ))}
                    </ul>
               </div>

               <h1>Total number of Profile data entered: {userList.length}</h1>
          </div>
     );
}

export default App;
