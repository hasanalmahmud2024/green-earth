1) What is the difference between var, let, and const?
var only has function scope, but let and const has block scopes. var is hoisted, redeclared. Let and const has solved these as let cannot be redeclared but reassigned and const cannot be reassigned or redlacred. 

2) What is the difference between map(), forEach(), and filter()?
these are array methods runs on every element of the array. but foreach() doesn't return anything.
filter() returns the first element that matches with the given condition.
map() returns a new transformed array.


3) What are arrow functions in ES6?
shorter way to write functions.
const add (a,b) => a+b;
But they don't have their own this; they inherit it from the scope they're in.


4) How does destructuring assignment work in ES6?
destructuring assignment lets us access values from arrays or object-properties directly into objects.

5) Explain template literals in ES6. How are they different from string concatenation?
template literals are written inside backticks so We can smoothly write. we can access variables using ${var_name}.
const var = `Hello, ${name}!Welcome`
lets us write multiple lines easily.
