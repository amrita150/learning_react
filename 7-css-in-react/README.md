# Inline , External and Internal CSS

In React, you can apply styles to your components using inline styles, internal styles (using style tags within your component), or external stylesheets.

## Inline CSS

```jsx 
const inlineStyle = {
    textAlign:' center',
    color:' rgb(36, 6, 105)',
    fontFamily:' sans-serif',
    textTransform:' uppercase',
    marginTop:' 4rem',
}

<h1 style={inlineStyle}>Images</h1>

```


## Internal CSS

```jsx 
<div>
      <style>
        {`
          .styledDiv {
            color: blue;
            background-color: lightgray;
            padding: 10px;
          }
        `}
      </style>
      <div className="styledDiv">This is a styled div</div>
    </div>
```

## External CSS

```jsx 

import './index.css';
<div className='img-div'>
<img src={image1} alt='random image'/>
<img src={image2} alt='random image'/>
<img src={image3} alt='random image'/>
</div>
```

external css 

```css
.img-div{
    display: flex;
    align-items: center;
    justify-content: center;
}
```

# Attributes in jsx 

In JSX (JavaScript XML), attributes are used to provide additional information or properties to HTML elements or React components. In JSX, attributes are specified in a manner similar to HTML, where you provide a name and a value for the attribute within the opening tag of the element.


```jsx 
<elementName attributeName="attributeValue">
  <!-- content -->
</elementName>

```

