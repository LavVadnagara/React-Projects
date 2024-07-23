import React from 'react';

function Weather(props) {
     const css = {
          border: "3px solid yellow",

     };
     return (
          <>
               <p style={css} className='WeatherElement'>Today's weather is rainy.</p>
          </>
     );
}

export default Weather;
