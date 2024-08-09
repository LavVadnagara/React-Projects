import React, { useState } from 'react';
import './App.css';

function App() {
     const [formData, setFormData] = useState({
          userName: '',
          userEmail: '',
          userNotes: '',
     });

     const [userList, setUserList] = useState([]);

     const handleAddUser = (e) => {
          e.preventDefault();
          setUserList([...userList, {
               name: formData.userName,
               email: formData.userEmail,
               text: formData.userNotes
          }]);
          setFormData({ userName: '', userEmail: '', userNotes: '' });
     };

     return (
          <div className='container'>
               <div className="inputSection">
                    <h1>User Profile Data</h1>
                    <form className="inputForm" onSubmit={handleAddUser}>
                         <label>
                              Username:
                              <input className='inputField' type="text" placeholder="Enter Username here"
                                   value={formData.userName}
                                   onChange={(e) => setFormData({ ...formData, userName: e.target.value })} />
                         </label>

                         <label>
                              Email:
                              <input className='inputField' type="email" placeholder="Enter Email here"
                                   value={formData.userEmail}
                                   onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })} />
                         </label>

                         <label>
                              Notes:
                              <input className='inputField' type="text" placeholder="Enter Notes here"
                                   value={formData.userNotes}
                                   onChange={(e) => setFormData({ ...formData, userNotes: e.target.value })} />
                         </label>

                         <button className='SubmitBtn' type="submit">Submit</button>
                    </form>
               </div>

               <div className="outputSection">
                    <h1>User Notes:</h1>
                    <ul className='userList'>
                         {userList.map((user, index) => (
                              <li key={index}>
                                   <p><strong>Username:</strong> {user.name}</p>
                                   <p><strong>Email:</strong> {user.email}</p>
                                   <p><strong>Notes:</strong> {user.text}</p>
                              </li>
                         ))}
                    </ul>
                    <h2>Total Profile Entered: {userList.length}</h2>
               </div>
          </div>
     );
}

export default App;
