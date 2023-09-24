# React component

A React component is like a building block for a web page. It's a small, self-contained piece of a web page's user interface that we can create and reuse.

For example, we can have a component for a "Like" button, a component for displaying user comments, or a component for a navigation bar. Components make it easier to build and manage different parts of a website by breaking them into smaller, manageable pieces.

> The first letter of our file name should be capital, and we always use a function with same name as file and write our jsx code inside it. 

### `Greeting.js` 
```jsx 
import React from 'react';

function Greeting() {
  return <h1>Hello, React Component!</h1>;
}

export default Greeting;

```

we export the Greeting component so that it can be used in other parts of your React application.

### `App.js`

```jsx

import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
```

here we import out Greeting component, so that we can use it in our App.js file.

```<Greeting />```  This is a common practice in React to render or include another component within a parent component.

### `index.js`

```jsx 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
``` 

### Important thing to keep in mind

> We should put most of our components inside a file called App.js. 

because in a typical React application: 

App.js is like the main container for our entire web app. which serves as the top-level container for our app's content and structure. 

index.js is the entry point that connects our React app to the actual web page (the HTML document) and puts our App.js component on the web page.

So, App.js defines what our app looks like and how it behaves, while index.js is the starting point that puts our app on the web page, making it accessible to users. This separation makes it easier to manage and understand our code.


## Export and Import

Import and export are used to share and use pieces of code in different parts of our program. 

### **Export:** 
we can use the export statement to make variables, functions, or classes available for use in other modules.


```jsx 
import React from 'react';

function Greeting() {
  return <h1>Hello, React Component!</h1>;
}

export default Greeting;

```

here we are exporting our greeting function so that we can use it inside our other files.

**Default Export**

we can have default export, which is the main thing exported from a module. There can be only one default export per module.

**Named Export**

We can also use the export statement to make variables, functions, or classes available for use in other modules. We can export them individually or as a named export.

```jsx

// Exporting a variable
export const myVariable = 42;

// Exporting a function
export function myFunction() {
  // ...
}
```

### **Import**

we use the import statement to bring functionality from other modules into our current module.

```jsx

import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
```
here to use our greeting function inside our app.js file, we import it.
