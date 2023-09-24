import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//inline css 
const inlineStyle = {
    textAlign:' center',
    color:' rgb(36, 6, 105)',
    fontFamily:' sans-serif',
    textTransform:' uppercase',
    marginTop:' 4rem',
}

const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/210/300";
const image3 = "https://picsum.photos/220/300";

// attributes
ReactDOM.render(
<>
<h1 style={inlineStyle}>Images</h1>
<div className='img-div'>
<img src={image1} alt='random image'/>
<img src={image2} alt='random image'/>
<img src={image3} alt='random image'/>
</div>
</>, document.getElementById("root")); 