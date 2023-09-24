import React from "react";
import './Greeting.css';

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

function Greeting(){
    return (
    <h1>Hello Sir, <span style= {cssStyle}> {greeting} </span> </h1>);
}

export default Greeting;