import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.Fragment>
  <h1>React Fragment</h1>
  <p>
  In React, a fragment is a lightweight way to group multiple elements together
   without adding an extra DOM element to the rendered output. 
  </p>
  </React.Fragment> , document.getElementById("root"));


 //another way
// ReactDOM.render(
//     <>
//   <h1>React Fragment</h1>
//   <p>
//   In React, a fragment is a lightweight way to group multiple elements together
//    without adding an extra DOM element to the rendered output. 
//   </p>
//   </> , document.getElementById("root"));
