import React from 'react';

function DateFun() {
     var TDate = new Date().toLocaleDateString();
     return (
          <>
           <h2>Today's date: {TDate}</h2>    
          </>
     );
}

export default DateFun;