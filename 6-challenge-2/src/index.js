import React from 'react';
import ReactDOM from 'react-dom';

const name = "Amrita";
const currDate = new Date();
// jsx expression
ReactDOM.render(
<>
<h1>My name is {name} </h1>
<p>Current Date is {currDate.toLocaleDateString()}</p>
<p>Current Time is {currDate.toLocaleTimeString()}</p>
</>, document.getElementById("root"));