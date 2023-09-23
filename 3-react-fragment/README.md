# React Fragment

In React, a fragment is a lightweight way to group multiple elements together without adding an extra DOM element to the rendered output. It's often used when you need to return multiple elements from a component's render method, but you don't want to wrap them in a parent div or any other container element.

## Code

```jsx
ReactDOM.render(
    <>
  <h1>Render multiple elements</h1>
  <p>
    Render only takes one single element. We can also use it as an array of
    elements and render multiple JSX elements inside it.
  </p>
  </> , document.getElementById("root"));
```

 You can also use the <React.Fragment> component if you prefer an explicit syntax:
```jsx
ReactDOM.render(
    <React.Fragment>
  <h1>React Fragment</h1>
  <p>
  In React, a fragment is a lightweight way to group multiple elements together
   without adding an extra DOM element to the rendered output. 
  </p>
  </React.Fragment> , document.getElementById("root"));

```
