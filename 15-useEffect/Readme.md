## useEffect
The useEffect Hook allows you to perform side effects in your components.

**Side effects** are actions that happen in your component other than rendering, like data fetching, setting up subscriptions, or interacting with the browser's DOM (Document Object Model).

> useEffect accepts two arguments. The second argument is optional.

```jsx
useEffect(<function>, <dependency>)
```

```jsx
function App(){
const [text, setText] = useState('');

   function changeHandler(event){
    // Update the 'text' state with the user's input
    setText(event.target.value);  
    console.log(event.target.value);
  }


  // Variation1 - Every Render 
  useEffect(() => {
    console.log("UI Renderer changed")
  });

  
  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}
```

**useState** used to store the current value of the input field (i.e., the text users type).

When you use useState to manage the state, React automatically re-renders your component whenever the state value changes. This ensures that the UI is updated to reflect the current state of the input field. Due to this, whenever user type anything the component re-render again and **useEffect** will run on every render of the component( Ui rendered change prints everytime).

`Variation 2 - First Render`
>if we want our  useEffect to render only once, specifically after the initial render of the component.then we add empty dependencies lis.

```jsx
//Variation 2 - First Render
useEffect(() => {
    console.log("UI Renderer changed");
  },[]);
```
In this case, the message "UI Renderer changed" will be logged to the console once, right after the component is first rendered. It will not run again, even if there are subsequent re-renders of the component. 


**Dependencies** are an array of values or variables that the effect relies on. These dependencies determine when the effect should run. When any of the values in the dependency array change between renders, the effect is re-executed. If the dependencies remain the same, the effect doesn't run.

Like , in this variation we pass an empty dependency array [] which tells React that there are no dependencies that would cause the effect to re-run, so it only runs once when the component mounts.

`Variation 3 - On First Render + Whenever Dependencies CHanges`

```jsx
 useEffect(() => {
    console.log("UI Renderer changed");
  }, [text]);
```

here we pass a dependency array that contains [text]. This means that the effect will run whenever the text variable changes. In this specific case, it will run whenever the text state variable changes its value.

``  Variation4 - To Handler Unmounting of Component  
``
```jsx
  useEffect(() => {
    console.log("Added");
    return () => {
      console.log("Removed");
    }
  }, [text]);
  ```

  >**Mount:** adding component into the DOM is called mounting. 

  >**Unmount:** removing component from the DOM is called unmounting.

**Setup Function (() => { console.log("Added"); }):** This is the code that runs when the component initially mounts and whenever the text variable (which is specified in the dependency array) changes. here in this code it logs "Added" to the console.

**Cleanup Function (() => { console.log("Removed"); }):** The cleanup function is optional, and you return it from the setup function. It runs before the setup function of the next render and when the component unmounts. Here in this code, it logs "Removed" to the console. 

This pattern using useEffect with a cleanup function is a fundamental technique in React for managing side effects and resource cleanup. It helps ensure that your components are well-behaved and that side effects are controlled and cleaned up as needed.