# props(properties) in react

 It's a way to pass data from a parent component to a child component. Props are a fundamental concept in React and are used to make your components dynamic and reusable.

With the use of props, we can easily reuse the same component multiple times while dynamically changing its content or behavior without having to define different properties for the same component in various parts of our application.

### `ChildComponent.js`

```jsx
function ChildComponent(props){
    return (
        <>
            <h1> {props.message}</h1>
        </>
    );
}
```

ChildComponent is a function that takes props as a parameter.  
```<h1> {props.message}</h1>```
This means it will display the text that is passed to it via the message prop.
### `App.js`

```jsx
const data = "Hello Everyone";
function App() {
  return (
    <ChildComponent message={data}></ChildComponent>
  );
}
```
```<ChildComponent message={data}></ChildComponent>```. This is how we pass the data to the ChildComponent as a prop. The message prop of ChildComponent will receive the value of dat.

##

So, it's a way to pass data from a parent component to a child component. Props are a fundamental concept in React and are used to make your components dynamic and reusable.

With the use of props, we can easily reuse the same component multiple times while dynamically changing its content or behavior without having to define different properties for the same component in various parts of our application.

#

In React, you can use a list of objects to represent a collection of items. This is more practical than writing out each item one by one in your code. It's a helpful way to manage and organize your content, especially when you're dealing with lists that can change over time. It makes your code easier to work with and adapt when you have dynamic lists of items.

### Example :
```jsx
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: "1925"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: "1949"
  }
];

function App() {
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Book
        title={books[0].title}
        author={books[0].author}
        year={books[0].year}
      />
      <Book
        title={books[1].title}
        author={books[1].author}
        year={books[1].year}
      />
      <Book
        title={books[2].title}
        author={books[2].author}
        year={books[2].year}
      />
    </div>
  );
}
```