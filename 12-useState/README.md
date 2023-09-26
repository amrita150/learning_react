# UseState (React Hook)

**useState:** This tool helps you keep track of things that can change in your project.

 the useState hook provides a structured way to manage and update state in functional components. It keeps track of the state's current value and provides a mechanism to update that value. This helps React efficiently handle state changes, trigger component re-renders when necessary.

```jsx 

let count = 1;

const IncNum = () => {
  count++;
  console.log('clicked');
}

const App = () => {
  return(
    <>
    <div className='container'>
     <h1> {count} </h1>
     <button className='btn' onClick={IncNum}> Click Me</button>
    </div>
    </>
  );
};
```

in this code we write count++ but still its state is not changing even after clicking the button.

So, we use useState to change state of count element.

### **syntax of useState**

>[current data , updated data ] = useState(initial data);

>const [count , setCount] = useState(0);

```jsx
const App = () => {

  const [count , setCount] = useState(0);  
  const IncNum = () => {
    setCount(count+1);
    console.log('clicked');
  }
  return(
    <>
    <div className='container'>
     <h1> {count} </h1>
     <button className='btn' onClick={IncNum}> Click Me</button>
    </div>
    </>
  );
};
```