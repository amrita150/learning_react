# jsx expression

JSX (JavaScript XML) is a syntax extension that allows us to write HTML-like code within JavaScript. JSX expressions are used to embed dynamic values or JavaScript code within JSX code. JSX expressions are enclosed in curly braces {}.


## example

```jsx
const name = "John";
<h1>Hello, {name}</h1>;

```

The curly braces {} indicate to the JSX compiler that the content inside them should be treated as a JavaScript expression. This allows us to insert variables, evaluate expressions, or call functions within our JSX code to create dynamic content.

## example 

```jsx
const name = "Amrita";
<h1>My name is {name}</h1>
<p>My lucky number is {5+5}</p>
```