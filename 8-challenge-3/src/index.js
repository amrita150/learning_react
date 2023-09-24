import React from "react";
import ReactDOM  from "react-dom";
import './index.css';

const currTime = new Date().getHours();
let greeting = "";

const cssStyle = { };

if(currTime>=1 && currTime<=11){
    greeting = 'Good Morning';
    cssStyle.color = "green";
} else if(currTime>=12 && currTime<=19){
    greeting = 'Good Afternoon';
    cssStyle.color = "orange";

} else{
    greeting = 'Good Night';
    cssStyle.color = "black";
}

ReactDOM.render(
    <>
   <div>
    <h1>Hello Sir, <span style= {cssStyle}> {greeting} </span> </h1>
   </div>
</>, document.getElementById('root'))