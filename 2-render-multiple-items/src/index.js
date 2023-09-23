import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render( <div>
// <h1>Render multiple element</h1>
// <p>Render only take one single element. We can use div 
// tag and render multiple jsx elements inside it</p>
// </div>
//  , document.getElementById("root"));

 //another way
// In react v16 it's possible for render() to return an array of elements
ReactDOM.render( [
    <h1>Render multiple element</h1> ,
    <p>Render only take one single element. We can also use it as array of elements
     and render multiple jsx elements inside it</p>
    ], document.getElementById("root"));
    
